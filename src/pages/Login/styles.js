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
      paddingVertical: 16,
    },
    logo: {
      flex: 1,
    },
    content: {
      paddingVertical: 64,
    },
    title: {
      fontSize: FONT_SIZES.biggest,
      fontFamily: FONT_FAMILIES.montserrat.bold,
      color: palette.title,
    },
    descriptionContainer: {
      marginTop: 8,
    },
    description: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
    },
    link: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.accent,
      textDecorationLine: 'underline',
    },
    forgotPassword: {
      textAlign: 'right',
      fontSize: FONT_SIZES.small,
      color: palette.text,
      textDecorationLine: 'underline',
      marginBottom: 24,
    },
    form: {
      marginTop: 48,
    },
  });
};
