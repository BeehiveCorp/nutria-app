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
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
    },
    avatarContainer: {
      backgroundColor: palette.container,
      width: 160,
      height: 160,
      borderRadius: 80,
      overflow: 'hidden',
    },
    avatar: {
      width: '100%',
      height: '100%',
    },
    name: {
      marginTop: 32,
      fontSize: FONT_SIZES.big,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
    },
    email: {
      marginTop: 4,
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
    },
    options: {
      marginVertical: 64,
    },
    option: {
      backgroundColor: palette.container,
    },
    logoutOption: {
      backgroundColor: chroma(palette.error).alpha(0.1).hex(),
      borderColor: chroma(palette.error).alpha(0.5).hex(),
    },
    version: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.text,
      textAlign: 'center',
      opacity: 0.5,
    },
  });
};
