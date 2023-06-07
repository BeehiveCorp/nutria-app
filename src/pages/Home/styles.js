import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 24,
      backgroundColor: palette.background,
    },
    boundaries: {
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
    },
    section: {
      marginTop: 32,
    },
    label: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
    },
    carousel: {
      marginTop: 16,
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
    },
    addDependent: {
      borderWidth: 1,
      height: 132,
      width: GLOBAL_SIZES.deviceWidth * 0.25,
      borderRadius: 8,
      borderColor: palette.accent,
      borderStyle: 'dashed',
      backgroundColor: chroma(palette.accent).alpha(0.05).hex(),
    },
  });
};
