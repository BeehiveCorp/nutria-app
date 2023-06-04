import { StyleSheet } from 'react-native';
import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';

export default getStyles = (theme) => {
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      height: 50,
      borderRadius: 8,
      backgroundColor: palette.container,
      borderWidth: 1,
      borderColor: palette.border,
    },
    input: {
      paddingHorizontal: 16,
      color: palette.title,
      flex: 1,
    },
    label: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.text,
      marginBottom: 8,
    },
    iconContainer: {
      paddingRight: 16,
      flex: 1,
    },
    messageContainer: {
      marginTop: 8,
    },
    message: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.error,
      marginLeft: 4,
    },
  });
};
