import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme, themeCode } = useContext(ThemeContext);
  const palette = new Palette(theme);

  const getColorByResult = (result) => {
    if (result >= 50) return palette.success;
    else if (result >= 30) return palette.warning;
    return palette.error;
  };

  return StyleSheet.create({
    container: {
      backgroundColor: palette.container,
      padding: 8,
      borderRadius: 8,
    },
    nutrientInfoContainer: {
      flex: 1,
    },
    symbolContainer: {
      backgroundColor: palette.border,
      height: 56,
      width: 56,
      borderRadius: 28,
    },
    symbol: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
    },
    content: {
      marginHorizontal: 16,
      flex: 1,
    },
    name: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
    },
    description: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
      marginTop: 4,
    },
    resultContainer: (result) => ({
      backgroundColor: chroma(getColorByResult(result)).alpha(0.1).hex(),
      width: 32,
      height: 32,
      borderRadius: 8,
    }),
    result: (result) => ({
      color: getColorByResult(result),
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
    }),
  });
};
