import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import chroma from 'chroma-js';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: (isSelected) => ({
      width: 18,
      height: 18,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: isSelected ? palette.accent : palette.border,
      backgroundColor: chroma(isSelected ? palette.accent : palette.border)
        .darken(4)
        .alpha(0.9)
        .hex(),
    }),
    value: (isSelected) => ({
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: isSelected ? palette.title : palette.text,
      marginLeft: 8,
    }),
  });
};
