import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {},
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    name: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.title,
    },
    time: {
      fontSize: FONT_SIZES.big - 4,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
      marginTop: 4,
    },
  });
};
