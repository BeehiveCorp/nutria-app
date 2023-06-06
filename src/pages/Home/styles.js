import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
    },
    screenText: {
      fontSize: FONT_SIZES.h1,
      fontFamily: FONT_FAMILIES.montserrat.bold,
      color: palette.title,
    },
    avatar: {
      width: 80,
      height: 80,
    },
  });
};
