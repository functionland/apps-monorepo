import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FxBox,
  FxButton,
  FxSafeAreaBox,
  FxSpacer,
  FxBottomSheetModalMethods,
} from '@functionland/component-library';
import { Alert, ScrollView } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import shallow from 'zustand/shallow';
import {
  BloxInfoBottomSheet,
  ColorSettingsCard,
  ConnectedDevicesCard,
  DeviceCard,
  UsageBar,
} from '../../components';
import { UsersCard } from '../../components/Cards/UsersCard';
import { EarningCard } from '../../components/Cards/EarningCard';
import { BloxHeader } from './components/BloxHeader';
import { BloxInteraction } from './components/BloxInteraction';
import { BloxInteractionModal } from './modals/BloxInteractionModal';
import { EDeviceStatus } from '../../api/hub';
import { EBloxInteractionType, TBloxInteraction } from '../../models';
import { ProfileBottomSheet } from '../../components/ProfileBottomSheet';
import { useUserProfileStore } from '../../stores/useUserProfileStore';
import { ConnectionOptionsSheet, ConnectionOptionsType } from '../../components/ConnectionOptionsSheet';
import { useLogger } from '../../hooks';
import { Routes } from '../../navigation/navigationConfig';
import { useNavigation } from '@react-navigation/native';
import { useBloxsStore } from '../../stores';

const DEFAULT_DIVISION = 30;

export const BloxScreen = () => {
  const bloxInteractionModalRef = useRef<FxBottomSheetModalMethods>(null);
  const profileBottomSheetRef = useRef<FxBottomSheetModalMethods>(null)
  const connectionOptionsSheetRef = useRef<FxBottomSheetModalMethods>(null)
  const bloxInfoBottomSheetRef = useRef<FxBottomSheetModalMethods>(null)

  const divisionSplit = useSharedValue(DEFAULT_DIVISION);
  const [screenIsLoaded, setScreenIsLoaded] = useState(false)
  const [loadingBloxSpace, setLoadingBloxSpace] = useState(false)
  const [divisionPercentage, setDivisionPercentage] =
    useState<number>(DEFAULT_DIVISION);
  const [selectedMode, setSelectedMode] = useState<EBloxInteractionType>(
    EBloxInteractionType.OfficeBloxUnit
  );
  const navigation = useNavigation();
  const logger = useLogger()
  const [fulaIsReady] = useUserProfileStore((state) => [
    state.fulaIsReady,
  ], shallow);

  const [bloxs, bloxsSpaceInfo, currentBloxPeerId, bloxsConnectionStatus, checkBloxConnection, getBloxSpace, removeBlox, updateBloxsStore] = useBloxsStore((state) => [
    state.bloxs,
    state.bloxsSpaceInfo,
    state.currentBloxPeerId,
    state.bloxsConnectionStatus,
    state.checkBloxConnection,
    state.getBloxSpace,
    state.removeBlox,
    state.update
  ], shallow);
  const bloxInteractions = Object.values(bloxs || {}).map<TBloxInteraction>(blox => ({
    peerId: blox.peerId,
    title: blox.name
  }))
  const currentBlox = useMemo(() => (bloxs[currentBloxPeerId]), [bloxs, currentBloxPeerId])
  const currentBloxSpaceInfo = useMemo(() => (bloxsSpaceInfo?.[currentBloxPeerId]), [bloxsSpaceInfo, currentBloxPeerId])
  divisionSplit.value = bloxsSpaceInfo?.[currentBloxPeerId]?.used_percentage || 0
  useEffect(() => {
    if (fulaIsReady && !screenIsLoaded) {
      setScreenIsLoaded(true)
      updateBloxSpace();
      checkBloxConnection()
    } else if (fulaIsReady && !bloxsConnectionStatus[currentBloxPeerId]) {
      checkBloxConnection()
    }
  }, [fulaIsReady])
  const updateBloxSpace = async () => {
    try {
      setLoadingBloxSpace(true)
      if (fulaIsReady) {
        const space = await getBloxSpace()
        logger.log('updateBloxSpace', space)
      }
    } catch (error) {
      logger.logError('GetBloxSpace Error', error)
    } finally {
      setLoadingBloxSpace(false)
    }
  }
  const showInteractionModal = () => {
    bloxInteractionModalRef.current.present();
  };

  const handleSelectMode = (mode: EBloxInteractionType) => {
    setSelectedMode(mode);
    bloxInteractionModalRef.current.close();
  };

  const handleUpdateDivisionPercentage = (percentage: number) => {
    setDivisionPercentage(percentage);
  };

  const showProfileModal = () => {
    profileBottomSheetRef.current.present()
  }
  const handleOnBloxChanged = (index: number) => {
    try {
      const blox = bloxInteractions[index]
      updateBloxsStore({
        currentBloxPeerId: blox.peerId
      })
    } catch (error) {
      logger.logError('handleOnBloxChanged', error)
    }

  }
  const handleOnConnectionOptionSelect = (type: ConnectionOptionsType) => {
    connectionOptionsSheetRef.current.close()
    switch (type) {
      case 'RETRY':
        if (fulaIsReady) {
          try {
            checkBloxConnection()
          } catch (error) {
            logger.logError('handleOnConnectionOptionSelect:checkBloxConnection', error)
          }
        }
        break;
      case 'CONNECT-TO-WIFI':
        navigation.navigate(Routes.InitialSetup, { screen: Routes.ConnectToBlox });
        break;
      default:
        break;
    }
  }
  const handleOnBloxRemovePress = (peerId: string) => {
    if (Object.values(bloxs)?.length <= 1) {
      Alert.alert('Warning', 'You cannot remove the last Blox!, please first add new Blox, then remove this one from the list.')
      return
    }
    Alert.alert('Remove Blox!', `Are you sure want to remove '${bloxs[peerId]?.name}' from the list?`,
      [{
        text: 'Yes',
        onPress: () => {
          bloxInfoBottomSheetRef.current.close()
          removeBlox(peerId)
        },
        style: 'destructive'
      }, {
        text: 'No',
        style: 'cancel'
      }])
  }
  return (
    <FxSafeAreaBox flex={1} edges={['top']}>
      <BloxHeader
        selectedMode={selectedMode}
        onChangeMode={showInteractionModal}
        onAvatarPress={showProfileModal}
      />
      <ScrollView>
        <FxBox paddingVertical="20" paddingHorizontal="20">
          <BloxInteraction
            bloxs={bloxInteractions}
            selectedMode={selectedMode}
            //setSelectedMode={setSelectedMode}
            onBloxChange={handleOnBloxChanged}
            onConnectionPress={() => connectionOptionsSheetRef.current.present()}
            onBloxPress={() => bloxInfoBottomSheetRef.current.present()}
          />
          <FxSpacer height={24} />
          {currentBloxSpaceInfo?.size != undefined &&
            <UsageBar
              divisionPercent={divisionSplit}
              totalCapacity={currentBloxSpaceInfo?.size || 1000}
            />}
          <DeviceCard
            onRefreshPress={updateBloxSpace}
            loading={loadingBloxSpace}
            data={{
              capacity: currentBloxSpaceInfo?.size || 0,
              name: 'Hard Disk',
              status: currentBloxSpaceInfo ? EDeviceStatus.InUse : EDeviceStatus.NotAvailable,
              associatedDevices: ['Blox Set Up']
            }}
          />
          {/* <FxSpacer height={8} />
          <QuoteStat divisionPercentage={divisionPercentage} />
          <FxSpacer height={24} />
          <ColorSettingsCard />
          <FxSpacer height={16} />
          <EarningCard totalFula={4.2931} />
          <FxSpacer height={16} />
          <ConnectedDevicesCard data={mockHub} />
          <FxSpacer height={16} />
          <UsersCard data={mockFriendData} />
          <FxSpacer height={16} />
          <Pool pool={mockPoolData[0]} />
          <FxSpacer height={36} />
          <FxButton size="large">Restart</FxButton> */}
        </FxBox>
      </ScrollView>
      <BloxInteractionModal
        ref={bloxInteractionModalRef}
        selectedMode={selectedMode}
        onSelectMode={handleSelectMode}
      />
      <BloxInfoBottomSheet ref={bloxInfoBottomSheetRef} bloxInfo={bloxs[currentBloxPeerId]} onBloxRemovePress={handleOnBloxRemovePress} />
      <ProfileBottomSheet ref={profileBottomSheetRef} />
      <ConnectionOptionsSheet ref={connectionOptionsSheetRef} onSelected={handleOnConnectionOptionSelect} />
    </FxSafeAreaBox>
  );
};
