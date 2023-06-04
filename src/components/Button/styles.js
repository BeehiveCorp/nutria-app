import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';

import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: (isDisabled) => ({
      height: 50,
      borderRadius: 8,
      backgroundColor: isDisabled ? palette.disabled : palette.accent,
    }),
    text: (isDisabled) => ({
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.bold,
      color: isDisabled ? palette.border : palette.background,
      paddingHorizontal: 8,
    }),
  });
};
