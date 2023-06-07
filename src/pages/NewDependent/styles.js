import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';
import { THEME } from '../../utils/constants';

export default getStyles = () => {
  const { theme, themeCode } = useContext(ThemeContext);
  const palette = new Palette(theme);

  const isDarkMode = themeCode === THEME.DARK;

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 24,
      backgroundColor: palette.background,
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
    },
    title: {
      fontSize: FONT_SIZES.medium + 4,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
      marginLeft: 8,
    },
    avatarContainer: {
      marginBottom: 24,
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
      backgroundColor: chroma(palette.accent)
        [isDarkMode ? 'darken' : 'brighten'](4)
        .alpha(0.9)
        .hex(),
      width: 32,
      height: 32,
      borderRadius: 16,
    },
  });
};
