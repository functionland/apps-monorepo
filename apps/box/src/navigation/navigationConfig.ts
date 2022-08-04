import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  InitialSetup: undefined;
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
};

export type MainTabsParamList = {
  Box: undefined;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
  Users: undefined;
  Pool: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  ConnectedDApps: undefined;
  Mode: undefined;
  Pools: undefined;
  About: undefined;
};

export type InitialSetupStackParamList = {
  Welcome: undefined;
  'Wallet Connect': undefined;
  'Setup Wifi': undefined;
  'Connect To Box': undefined;
  'Check Connection': { ssid: string };
  'Setup Complete': undefined;
};

type MainTabsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type SettingsStackNavigationProps<
  T extends keyof SettingsStackParamList
> = CompositeNavigationProp<
  NativeStackNavigationProp<SettingsStackParamList, T>,
  MainTabsNavigationProp
>;
