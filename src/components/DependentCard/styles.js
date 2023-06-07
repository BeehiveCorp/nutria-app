import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, FONT_FAMILIES, GLOBAL_SIZES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      backgroundColor: palette.container,
      borderRadius: 8,
      width: GLOBAL_SIZES.deviceWidth * 0.25,
      height: 132,
      padding: 16,
    },
    avatarContainer: {
      backgroundColor: palette.background,
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    name: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
      textAlign: 'center',
    },
    birthDate: {
      fontSize: FONT_SIZES.big - 4,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
      marginTop: 4,
    },
  });
};
