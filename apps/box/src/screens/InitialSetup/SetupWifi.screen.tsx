import {
  FxText,
  FxPicker,
  FxPickerItem,
  FxTextInput,
  FxButton,
} from '@functionland/component-library';
import React, { useState } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { useInitialSetupNavigation, useFetch } from '../../hooks';
import { getWifiList, postWifiConnect } from '../../api/wifi';
import { Routes } from '../../navigation/navigationConfig';

export const SetupWifiScreen = () => {
  const navigation = useInitialSetupNavigation();
  const [ssid, setSsid] = useState<string>(null);
  const [password, setPassword] = useState('');
  const {
    loading,
    error,
    data: networks,
  } = useFetch({ apiMethod: getWifiList });
  const ssids = networks?.data.map(({ ssid: network }) => network);
  const uniqueSsids = [...new Set(ssids)];

  const onNetworkChange = (value) => setSsid(value);
  const onPasswordChange = (value) => setPassword(value);

  const onConnect = async () => {
    Keyboard.dismiss();
    try {
      await postWifiConnect({
        ssid: ssid ?? uniqueSsids[0],
        password,
        countryCode: RNLocalize.getCountry(),
      });
    } catch (err) {}

    navigation.navigate(Routes.CheckConnection, {
      ssid: ssid ?? uniqueSsids[0],
    });
  };

  return (
    <SafeAreaView>
      {loading && (
        <FxText variant="body" color="secondary" margin="16">
          Loading Network List...
        </FxText>
      )}
      {error && (
        <FxText variant="body" color="secondary" margin="16">
          {error.message}
        </FxText>
      )}
      {!loading && !error && (
        <>
          <FxPicker
            margin="8"
            color="primary"
            selectedValue={ssid ?? uniqueSsids[0]}
            onValueChange={onNetworkChange}
          >
            {uniqueSsids.map((network) => (
              <FxPickerItem key={network} label={network} value={network} />
            ))}
          </FxPicker>
          <FxTextInput
            margin="16"
            padding="16"
            textAlign="center"
            color="primary"
            backgroundColor="white"
            borderRadius="s"
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={onPasswordChange}
          />
          <FxButton onPress={onConnect}>Connect</FxButton>
        </>
      )}
    </SafeAreaView>
  );
};
