import React from 'react';
import {
  FxBottomSheetModal,
  FxBottomSheetModalMethods,
  FxBox,
  FxButton,
  FxText,
  useFxTheme,
} from '@functionland/component-library';
import { ScrollView } from 'react-native-gesture-handler';
import { TBlox } from '../models';
import { ActivityIndicator, Share } from 'react-native';
import { BloxIcon } from './Icons';
import { useBloxsStore } from '../stores';

type BloxInfoBottomSheetProps = {
  closeBottomSheet?: VoidFunction;
  onBloxRemovePress?: (peerId: string) => void;
  onResetToHotspotPress?: (peerId: string) => void;
  onRebootBloxPress?: (peerId: string) => void;
  onResetChainPress?: (peerId: string) => void;
  onClearCachePress?: VoidFunction;
  bloxInfo: TBlox;
  resetingBloxHotspot?: boolean;
  rebootingBlox?: boolean;
  resettingChain?: boolean;
};

export const BloxInfoBottomSheet = React.forwardRef<
  FxBottomSheetModalMethods,
  BloxInfoBottomSheetProps
>(
  (
    {
      bloxInfo,
      resetingBloxHotspot,
      rebootingBlox,
      resettingChain,
      onBloxRemovePress,
      onResetToHotspotPress,
      onRebootBloxPress,
      onResetChainPress,
      onClearCachePress,
    },
    ref
  ) => {
    const theme = useFxTheme();
    const [bloxsPropertyInfo] = useBloxsStore((state) => [
      state.bloxsPropertyInfo,
    ]);
    const bloxPropertyInfo = bloxsPropertyInfo[bloxInfo?.peerId];
    return (
      <FxBottomSheetModal ref={ref}>
        <FxBox>
          <FxText variant="bodyMediumRegular" textAlign="center" fontSize={24}>
            {bloxInfo?.name}
          </FxText>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FxBox paddingVertical="20" alignItems="center">
              <FxText variant="bodyMediumRegular" padding="8">
                Blox PeerId
              </FxText>
              <FxButton
                onPress={() =>
                  Share.share({
                    title: bloxInfo?.name,
                    message: bloxInfo?.peerId,
                  })
                }
                iconLeft={<BloxIcon />}
                flexWrap="wrap"
                paddingHorizontal="32"
              >
                <FxBox style={{ flex: 1, width: 250 }}>
                  <FxText
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{ width: 250 }}
                  >{`${bloxInfo?.peerId}`}</FxText>
                </FxBox>
              </FxButton>
            </FxBox>
            <FxBox paddingVertical="4" alignItems="center">
              <FxText variant="bodyMediumRegular" padding="8">
                Blox fula image
              </FxText>
              <FxButton
                onPress={() =>
                  Share.share({
                    title: 'Fula image version',
                    message:
                      bloxPropertyInfo?.containerInfo_fula?.image ||
                      'Not available',
                  })
                }
                iconLeft={<BloxIcon />}
                flexWrap="wrap"
                paddingHorizontal="32"
              >
                <FxBox style={{ flex: 1, width: 250 }}>
                  <FxText
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{ width: 250 }}
                  >{`${
                    bloxPropertyInfo?.containerInfo_fula?.image ||
                    'Not available'
                  }`}</FxText>
                </FxBox>
              </FxButton>
            </FxBox>
            <FxButton
              size="large"
              variant="inverted"
              onPress={() => onResetToHotspotPress(bloxInfo?.peerId)}
              marginTop="32"
            >
              {!resetingBloxHotspot ? (
                'Reset Blox to hotspot mode'
              ) : (
                <ActivityIndicator />
              )}
            </FxButton>
            <FxButton
              size="large"
              variant="inverted"
              onPress={() => onRebootBloxPress(bloxInfo?.peerId)}
              marginTop="16"
            >
              {!rebootingBlox ? 'Reboot blox' : <ActivityIndicator />}
            </FxButton>
            <FxButton
              size="large"
              variant="inverted"
              onPress={() => onResetChainPress(bloxInfo?.peerId)}
              marginTop="16"
            >
              {!resettingChain ? 'Reset Chain Data' : <ActivityIndicator />}
            </FxButton>
            <FxButton
              size="large"
              variant="inverted"
              onPress={() => onClearCachePress()}
              marginTop="16"
            >
              {!resettingChain ? 'Clear Cache' : <ActivityIndicator />}
            </FxButton>
            <FxButton
              onPress={() => onBloxRemovePress(bloxInfo?.peerId)}
              marginVertical="16"
              style={{ backgroundColor: theme.colors.errorBase }}
            >
              Remove Blox
            </FxButton>
          </ScrollView>
        </FxBox>
      </FxBottomSheetModal>
    );
  }
);
