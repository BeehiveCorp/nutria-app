import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    bottomSheetOption: (isSelected) => ({
      padding: 16,
      borderRadius: 8,
      borderWidth: 0.6,
      borderColor: isSelected ? palette.text : palette.border,
      backgroundColor: chroma(isSelected ? palette.text : palette.border)
        .darken(4)
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
