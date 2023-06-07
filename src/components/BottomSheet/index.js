import React, { useContext, useMemo, forwardRef, useCallback } from 'react';

import { Text } from 'react-native';

import GorgonBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const BottomSheet = forwardRef(
  ({ snapPoints, title, description, bottomInset = 32, children }, ref) => {
    const { theme } = useContext(ThemeContext);
    const styles = getStyles();

    const defaultSnapPoints = useMemo(() => ['25%', '50%', '85%'], []);

    const renderBackdrop = useCallback((props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        opacity={0.65}
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
        bottomInset={bottomInset}
        detached
      >
        <Box style={styles.container}>
          {(!!title || !!description) && (
            <Box style={styles.header}>
              {!!title && <Text style={styles.title}>{title}</Text>}

              {!!description && (
                <Text style={{ ...styles.description, marginTop: !!title ? 4 : 0 }}>
                  {description}
                </Text>
              )}
            </Box>
          )}

          <Box style={styles.content}>{children}</Box>
        </Box>
      </GorgonBottomSheet>
    );
  }
);

export default BottomSheet;
