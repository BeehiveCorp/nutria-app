import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../../theme';
import { ThemeContext } from '../../../contexts';
import { THEME } from '../../../utils/constants';

export default getStyles = () => {
  const { theme, themeCode } = useContext(ThemeContext);
  const palette = new Palette(theme);

  const isDarkMode = themeCode === THEME.DARK;

  return StyleSheet.create({
    container: (isFocused) => ({
      backgroundColor: isFocused
        ? chroma(palette.container)[isDarkMode ? 'brighten' : 'darken'](0.2).hex()
        : 'transparent',
      height: 60 - 4,
      bottom: -15,
      width: '100%',
      borderRadius: 60,
    }),
  });
};
