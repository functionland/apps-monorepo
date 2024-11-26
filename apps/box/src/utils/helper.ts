// @ts-ignore-next-line
import '@walletconnect/react-native-compat';
import { HDKEY, DID } from '@functionland/fula-sec';
import { fula } from '@functionland/react-native-fula';
import { numberToHex, sanitizeHex, utf8ToHex } from '@walletconnect/encoding';
import { Constants } from '.';

export const getMyDID = (password: string, signiture: string): string => {
  const ed = new HDKEY(password);
  const keyPair = ed.createEDKeyPair(signiture);
  const did = new DID(keyPair.secretKey);
  return did.did();
};

export const getMyDIDKeyPair = (
  password: string,
  signiture: string
): {
  secretKey: Uint8Array;
  pubKey: Uint8Array;
} => {
  const ed = new HDKEY(password);
  const keyPair = ed.createEDKeyPair(signiture);
  return keyPair;
};

let initFulaPromise: Promise<string | undefined> | null = null; // Shared promise to track execution

export const initFula = async ({
  password,
  signiture,
  bloxAddr = undefined,
  bloxPeerId,
  conAddr = Constants.FXRelay,
}: {
  password: string;
  signiture: string;
  bloxAddr?: string;
  bloxPeerId?: string;
  conAddr?: string;
}): Promise<string | undefined> => {
  // If a previous call is in progress, wait for it to finish
  if (initFulaPromise) {
    console.log(
      'initFula is already running. Waiting for the previous call...'
    );
    return initFulaPromise;
  }

  // Create a new promise for this execution
  initFulaPromise = new Promise((resolve, reject) => {
    (async () => {
      try {
        if (!password || !signiture) {
          throw new Error(
            'Password and signature are required to initialize Fula.'
          );
        }

        // Determine the Blox address
        const bloxAddress = bloxAddr
          ? bloxAddr
          : bloxPeerId
            ? `${conAddr}/p2p/${bloxPeerId}`.trim()
            : '';

        if (!bloxAddress) {
          throw new Error('Blox address or peer ID must be provided.');
        }

        const keyPair = getMyDIDKeyPair(password, signiture);

        console.log('initFula helper.ts', { bloxAddress, bloxPeerId, keyPair });

        try {
          // Attempt to logout and shutdown any previous Fula client
          await fula.logout(keyPair.secretKey.toString(), '');
          await fula.shutdown();
          console.log('Previous Fula client shutdown successfully.');
        } catch (shutdownError) {
          console.warn(
            'Failed to shutdown previous Fula client:',
            shutdownError
          );
        }

        // Initialize a new Fula client
        const peerId = await fula.newClient(
          keyPair.secretKey.toString(), // Private key of DID identity in string format
          '', // Leave empty to use the default temp one
          bloxAddress,
          bloxAddress ? '' : 'noop', // Leave empty for testing without a backend node
          true, // Enable IPFS storage
          true, // Enable IPFS networking
          true // Enable IPFS pubsub
        );

        console.log('Fula initialized successfully with peerId:', peerId);
        resolve(peerId); // Resolve with the peer ID on success
      } catch (error) {
        console.error('initFula failed:', error);
        reject(error); // Reject with the error on failure
      } finally {
        initFulaPromise = null; // Reset the shared promise after execution
      }
    })(); // Immediately invoke the async function inside the executor
  });

  return initFulaPromise;
};

export const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomNum = Math.random() * Math.pow(10, 18);
  return `${timestamp}-${randomNum}`;
};
