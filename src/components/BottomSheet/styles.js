import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';

import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  const indicatorBottomOffset = 24;

  return StyleSheet.create({
    sheetBackground: {
      backgroundColor: theme.container,
    },
    sheetContainer: {
      marginBottom: -20,
    },
    sheet: {
      marginHorizontal: 8,
    },
    handle: {
      top: -indicatorBottomOffset,
    },
    handleIndicator: {
      backgroundColor: palette.text,
    },
    container: {
      flex: 1,
      marginTop: -indicatorBottomOffset,
      padding: 20,
    },
    header: {
      marginBottom: 32,
    },
    title: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.bold,
      color: palette.title,
    },
    description: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
    },
  });
};
