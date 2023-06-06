import React, { useContext, useMemo, forwardRef, useCallback } from 'react';

import GorgonBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';
import { View } from 'react-native';

const BottomSheet = forwardRef(({ snapPoints, children }, ref) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const defaultSnapPoints = useMemo(() => ['25%', '50%', '85%'], []);

  const renderBackdrop = useCallback((props) => (
    <BottomSheetBackdrop
      {...props}
      pressBehavior="close"
      disappearsOnIndex={-1}
      appearsOnIndex={1}
    />
  ));

  return (
    <GorgonBottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints ?? defaultSnapPoints}
      enablePanDownToClose
      style={styles.sheet}
      containerStyle={styles.sheetContainer}
      backgroundStyle={styles.sheetBackground}
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
      backdropComponent={renderBackdrop}
      bottomInset={24}
      detached
    >
      <Box style={styles.container}>{children}</Box>
    </GorgonBottomSheet>
  );
});

export default BottomSheet;
