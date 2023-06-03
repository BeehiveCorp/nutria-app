import { StyleSheet } from 'react-native';
import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../../theme';

export default getStyles = (theme) => {
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
    },
    screenText: {
      marginTop: 100,
      fontSize: FONT_SIZES.h1,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.title,
    },
  });
};
