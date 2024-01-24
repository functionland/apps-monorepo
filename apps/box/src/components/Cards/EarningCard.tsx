import React from 'react';
import { FxBox, FxCard, FxRefreshIcon } from '@functionland/component-library';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

type EarningCardProps = React.ComponentProps<typeof FxBox> & {
  data: { totalFula: string };
  loading?: boolean;
  onRefreshPress?: () => void;
};
export const EarningCard = ({
  data,
  loading,
  onRefreshPress,
  ...rest
}: EarningCardProps) => {
  const bottomSheetRef = React.useRef<BottomSheetModalMethods>(null);
  const { totalFula } = data;

  return (
    <FxCard
      {...rest}
      onLongPress={() => bottomSheetRef.current?.present()}
      delayLongPress={200}
    >
      <FxBox flexDirection="row" justifyContent="space-between">
        <FxCard.Title marginBottom="8">Earning</FxCard.Title>
        {loading ? (
          <ActivityIndicator />
        ) : (
          onRefreshPress && (
            <FxRefreshIcon color="white" onPress={onRefreshPress} />
          )
        )}
      </FxBox>
      {totalFula !== undefined && (
        <>
          <FxCard.Row>
            <FxCard.Row.Title>Total fula</FxCard.Row.Title>
            <FxCard.Row.Data>
              {totalFula === 'NaN' ? <Text>0</Text> : <Text>{totalFula}</Text>}
            </FxCard.Row.Data>
          </FxCard.Row>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://fund.functionyard.fula.network/')
            }
          >
            <Text>Join Fula Testnet</Text>
          </TouchableOpacity>
        </>
      )}
    </FxCard>
  );
};
