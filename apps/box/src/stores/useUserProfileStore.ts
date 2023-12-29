import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { blockchain, fula } from '@functionland/react-native-fula';
import { TAccount, TBloxFreeSpace } from '../models';
import { KeyChain } from '../utils';
import { useBloxsStore } from './useBloxsStore';
import { firebase } from '@react-native-firebase/crashlytics';

type BloxConectionStatus = 'CONNECTED' | 'PENDING' | 'DISCONNECTED';
interface UserProfileActions {
  setHasHydrated: (isHydrated: boolean) => void;
  setKeyChainValue: (service: KeyChain.Service, value: string) => Promise<void>;
  loadAllCredentials: () => Promise<void>;
  setWalletId: (walletId: string, clearSigniture?: boolean) => Promise<void>;
  setAppPeerId: (peerId: string | undefined) => void;
  setBloxPeerIds: (peerIds: string[] | undefined) => void;
  createAccount: ({ seed }: { seed: string }) => Promise<TAccount>;
  getEarnings: () => Promise<void>;
  getBloxSpace: () => Promise<TBloxFreeSpace>;
  logout: () => boolean;
  setFulaIsReady: (value: boolean) => void;
  checkBloxConnection: () => Promise<boolean>;
  reset: () => void;
}
export interface UserProfileSlice {
  _hasHydrated: boolean;
  walletId?: string | undefined;
  /**
   * Password is a phares that user enter to create DID and make signiture
   */
  password?: string | undefined;
  /**
   * signiture is the result of signing password and did secret key by wallet
   */
  signiture?: string | undefined;
  fulaPeerId?: string | undefined;
  fulaRoodCID?: string | undefined;
  appPeerId?: string | undefined;
  bloxPeerIds?: string[] | undefined;
  accounts: TAccount[];
  earnings: string;
  activeAccount?: TAccount | undefined;
  bloxSpace: TBloxFreeSpace | undefined;
  fulaIsReady: boolean;
  bloxConnectionStatus: BloxConectionStatus;
}
// define the initial state
const initialState: UserProfileSlice = {
  _hasHydrated: false,
  bloxPeerIds: [],
  accounts: [],
  earnings: '0.0',
  bloxSpace: undefined,
  fulaIsReady: false,
  bloxConnectionStatus: 'PENDING',
  appPeerId: undefined,
  fulaRoodCID: undefined,
  fulaPeerId: undefined,
  signiture: undefined,
  password: undefined,
  walletId: undefined,
};
const createUserProfileSlice: StateCreator<
  UserProfileSlice & UserProfileActions,
  [],
  [['zustand/persist', Partial<UserProfileSlice & UserProfileActions>]],
  UserProfileSlice & UserProfileActions
> = persist(
  (set, get) => ({
    ...initialState,
    setHasHydrated: (isHydrated) => {
      set({
        _hasHydrated: isHydrated,
      });
    },
    loadAllCredentials: async () => {
      const password =
        (await KeyChain.load(KeyChain.Service.DIDPassword)) || undefined;
      const fulaPeerId =
        (await KeyChain.load(KeyChain.Service.FULAPeerId)) || undefined;
      const fulaRoodCID =
        (await KeyChain.load(KeyChain.Service.FULARootCID)) || undefined;
      const signiture =
        (await KeyChain.load(KeyChain.Service.Signiture)) || undefined;
      set({
        password: password?.password,
        fulaPeerId: fulaPeerId?.password,
        fulaRoodCID: fulaRoodCID?.password,
        signiture: signiture?.password,
      });
    },
    setKeyChainValue: async (service, value) => {
      switch (service) {
        case KeyChain.Service.DIDPassword: {
          const dIDPassword =
            (await KeyChain.save('DIDPassword', value, service)) || undefined;
          set({
            password: dIDPassword?.password,
          });
          break;
        }
        case KeyChain.Service.FULAPeerId: {
          const fULAPeerId =
            (await KeyChain.save('FULAPeerId', value, service)) || undefined;
          set({
            fulaPeerId: fULAPeerId?.password,
          });
          break;
        }
        case KeyChain.Service.FULARootCID: {
          const fULARootCID =
            (await KeyChain.save('FULARootCID', value, service)) || undefined;
          set({
            fulaRoodCID: fULARootCID?.password,
          });
          break;
        }
        case KeyChain.Service.Signiture: {
          const signiture =
            (await KeyChain.save('Signiture', value, service)) || undefined;
          set({
            signiture: signiture?.password,
          });
          break;
        }
        default:
          break;
      }
    },
    setWalletId: async (walletId, clearSigniture) => {
      if (clearSigniture) {
        await KeyChain.reset(KeyChain.Service.DIDPassword);
        await KeyChain.reset(KeyChain.Service.Signiture);
        set({
          walletId,
          password: undefined,
          signiture: undefined,
        });
      } else {
        set({
          walletId,
        });
      }
    },
    setAppPeerId: (peerId) => {
      set({
        appPeerId: peerId,
      });
    },
    setBloxPeerIds: (peerIds) => {
      set({
        bloxPeerIds: peerIds,
      });
    },
    createAccount: async ({ seed }) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const accounts = get().accounts;
        const account = await blockchain.createAccount(`/${seed}`);
        set({
          accounts: [account, ...accounts],
        });
        return account;
      } catch (error) {
        throw error;
      }
    },
    getEarnings: async () => {
      const account = await blockchain.getAccount();
      // eslint-disable-next-line no-useless-catch
      try {
        const earnings = await blockchain.assetsBalance(
          account.account,
          '120',
          '100'
        );
        set({
          earnings: earnings.amount,
        });
      } catch (error) {
        if (!error.toString().includes('response: 400')) {
          set({
            earnings: '0.0',
          });
        }
        //TODO: add better error handling
        // throw error;
      }
    },
    logout: () => {
      // TO: cleare all persist user profile data
      throw 'Not implemented';
    },
    getBloxSpace: async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        // if (!await fula.isReady())
        //   throw 'Fula is not ready!'
        const bloxSpace = await blockchain.bloxFreeSpace();
        console.log('bloxSpace', bloxSpace);
        set({
          bloxSpace: {
            ...bloxSpace,
          } as TBloxFreeSpace,
        });
        return bloxSpace as TBloxFreeSpace;
      } catch (error) {
        throw error;
      }
    },
    setFulaIsReady: (value: boolean) => {
      set({
        fulaIsReady: value,
      });
    },
    checkBloxConnection: async () => {
      try {
        // if (!await fula.isReady())
        //   throw 'Fula is not ready!'
        set({
          bloxConnectionStatus: 'PENDING',
        });
        const connected = await fula.checkConnection();
        console.log('checkBloxConnection', connected);
        set({
          bloxConnectionStatus: connected ? 'CONNECTED' : 'DISCONNECTED',
        });
        return connected;
      } catch (error) {
        set({
          bloxConnectionStatus: 'DISCONNECTED',
        });
        throw error;
      }
    },
    reset: () => {
      set(initialState);
    },
  }),
  {
    name: 'userProfileSlice',
    version: 1,
    getStorage: () => AsyncStorage,
    serialize: (state) => JSON.stringify(state),
    deserialize: (str) => JSON.parse(str),
    onRehydrateStorage: () => {
      // anything to run before rehydrating, return function is called after rehydrating
      return (state) => {
        state.setHasHydrated(true);
      };
    },
    partialize: (state): Partial<UserProfileSlice & UserProfileActions> => ({
      walletId: state.walletId,
      bloxPeerIds: state.bloxPeerIds,
      appPeerId: state.appPeerId,
      accounts: state.accounts,
      activeAccount: state.activeAccount,
    }),
    migrate: async (persistedState, version) => {
      const { setState } = useBloxsStore;
      try {
        if (version === 0) {
          if (persistedState) {
            const userPrfoile = persistedState as UserProfileSlice;
            const bloxs =
              userPrfoile?.bloxPeerIds?.reduce((obj, peerId, index) => {
                obj[peerId] = {
                  peerId,
                  name: `Blox Unit #${index}`,
                };
                return obj;
              }, {}) || {};
            setState({
              bloxs,
            });
          }
        }
      } catch (error) {
        console.log(error);
        firebase
          .crashlytics()
          .recordError(error, `UserProfileStore migrate:version(${version})`);
      }
      return persistedState;
    },
  }
);

export const useUserProfileStore = create<
  UserProfileSlice & UserProfileActions
>()((...a) => ({
  ...createUserProfileSlice(...a),
}));
