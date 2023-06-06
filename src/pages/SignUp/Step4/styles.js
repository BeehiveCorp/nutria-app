import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../../../theme';
import { ThemeContext } from '../../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
      paddingVertical: 24,
    },
    header: {
      marginVertical: 40,
    },
    title: {
      marginTop: 32,
      fontSize: FONT_SIZES.big,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
    },
    description: {
      marginTop: 8,
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
      lineHeight: FONT_SIZES.medium * 1.4,
    },
    content: {
      flex: 1,
    },
    avatar: {
      backgroundColor: palette.container,
      width: 140,
      height: 140,
      borderRadius: 70,
    },
    add: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      backgroundColor: chroma(palette.accent).darken(4).alpha(0.9).hex(),
      width: 32,
      height: 32,
      borderRadius: 16,
    },
  });
};
