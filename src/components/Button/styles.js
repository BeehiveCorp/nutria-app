import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';

export default getStyles = (theme) => {
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      height: 50,
      borderRadius: 8,
      backgroundColor: palette.accent,
    },
    text: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.bold,
      color: palette.background,
      paddingHorizontal: 8,
    },
  });
};