import { StyleSheet } from 'react-native';
import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../../theme';

export default getStyles = (theme) => {
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    poweredBy: {
      fontSize: FONT_SIZES.small,
      color: palette.title,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      position: 'absolute',
      bottom: 120,
    },
  });
};
