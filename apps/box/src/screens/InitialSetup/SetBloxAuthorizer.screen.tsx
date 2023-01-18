import React, { useEffect, useState } from 'react';
// @ts-ignore-next-line
import {
  FxBox,
  FxButton,
  FxKeyboardAwareScrollView,
  FxProgressBar,
  FxSafeAreaBox,
  FxText,
} from '@functionland/component-library';
import { fula } from '@functionland/react-native-fula';

import { useInitialSetupNavigation } from '../../hooks';
import { Routes } from '../../navigation/navigationConfig';
import { useUserProfileStore } from '../../stores/useUserProfileStore';
import { ActivityIndicator } from 'react-native';
import { Helper } from '../../utils';

export const SetBloxAuthorizerScreen = () => {
  const navigation = useInitialSetupNavigation();
  const [newPeerId, setNewPeerId] = useState(undefined);
  const [callingApi] = useState(false);
  const [setAppPeerId, signiture, password, appPeerId] = useUserProfileStore(
    (state) => [
      state.setAppPeerId,
      state.signiture,
      state.password,
      state.appPeerId,
    ]
  );

  useEffect(() => {
    generateAppPeerId();
  }, []);
  const generateAppPeerId = async () => {
    const peerId =await newFulaClient(password, signiture);
    if (peerId) setNewPeerId(peerId);
  };
  const goBack = () => navigation.goBack();

  const handleNext = () => {
    navigation.navigate(Routes.SetupComplete);
  };

  const handleSetOwnerPeerId = () => {
    if (newPeerId) {
      //TO DO : call Bolx hardware api to set owner's peerId
      setAppPeerId(newPeerId);
    }
  };

  //TO DO: un comment the codes

  const newFulaClient = async (password: string, signiture: string) => {
    if (password && signiture) {
      const keyPair = Helper.getMyDIDKeyPair(password, signiture);
      try {
        if (await fula.isReady()) await fula.shutdown();
        const peerId = await fula.newClient(
          keyPair.secretKey.toString(), //bytes of the privateKey of did identity in string format
          ``, // leave empty to use the default temp one
          '',
          'noop', //leave empty for testing without a backend node
          false
        );
        return peerId;
      } catch (error) {
        console.log('newFulaClient', error);
        return null;
      }
    }
  };

  return (
    <FxSafeAreaBox flex={1} paddingHorizontal="20" paddingVertical="16">
      <FxProgressBar progress={80} />
      <FxKeyboardAwareScrollView enableOnAndroid={true} extraHeight={100}>
        <FxBox flex={3} paddingVertical="80">
          <FxText variant="h300" textAlign="center" marginBottom="80">
            Set Blox Owner
          </FxText>
          <FxText variant="body" textAlign="center" marginBottom="80">
            Now you can set the Blox App peerId as an owner on the Blox
          </FxText>
          {password && signiture ? (
            <FxBox>
              <FxText variant="h300" textAlign="center" marginBottom="24">
                The Blox App Peer ID
              </FxText>
              <FxText color="warningBase" textAlign="center" marginTop="8">
                {newPeerId ?? 'Is undefined!'}
              </FxText>
            </FxBox>
          ) : null}
        </FxBox>
      </FxKeyboardAwareScrollView>

      <FxBox flex={1} justifyContent="flex-end">
        <FxBox
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          marginTop="16"
        >
          <FxButton
            variant="inverted"
            paddingHorizontal="20"
            marginRight="12"
            onPress={goBack}
          >
            Back
          </FxButton>
          {!appPeerId ? (
            <FxButton width={150} onPress={handleSetOwnerPeerId}>
              {!callingApi ? 'Set authorizer' : <ActivityIndicator />}
            </FxButton>
          ) : (
            <FxButton width={150} onPress={handleNext}>
              Next
            </FxButton>
          )}
        </FxBox>
      </FxBox>
    </FxSafeAreaBox>
  );
};
