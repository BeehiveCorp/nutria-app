import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';
import { THEME } from '../../utils/constants';

export default getStyles = () => {
  const { theme, themeCode } = useContext(ThemeContext);
  const palette = new Palette(theme);

  const isDarkMode = themeCode === THEME.DARK;

  return StyleSheet.create({
    bottomSheetOption: (isSelected) => ({
      padding: 16,
      borderRadius: 8,
      borderWidth: 0.6,
      borderColor: isSelected ? palette.text : palette.border,
      backgroundColor: chroma(isSelected ? palette.text : palette.border)
        [isDarkMode ? 'darken' : 'brighten'](4)
        .alpha(0.3)
        .hex(),
    }),
    bottomSheetOptionTitle: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
      marginLeft: 16,
    },
  });
};
