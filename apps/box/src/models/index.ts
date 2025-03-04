import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
export * from './dApps';
export * from './pool';
export * from './blox';
export * from './account'
export enum EBloxInteractionType {
  HomeBloxSetup = 'HomeBloxSetup',
  OfficeBloxUnit = 'OfficeBloxUnit',
}

export type TBloxInteraction = {
  //mode: EBloxInteractionType;
  peerId?:string;
  title: string;
  darkIcon?: FC<SvgProps>;
  lightIcon?: FC<SvgProps>;
};

export enum EConnectionStatus {
  notConnected = 'notConnected',
  connecting = 'connecting',
  connected = 'connected',
  failed = 'failed',
  bleConnecting = 'bleConnecting',
  bleConnected = 'bleConnected',
  bleFailed = 'bleFailed',
}
