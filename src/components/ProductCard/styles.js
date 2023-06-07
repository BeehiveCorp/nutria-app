import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, FONT_FAMILIES, GLOBAL_SIZES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      maxWidth: GLOBAL_SIZES.deviceWidth * 0.35,
      backgroundColor: palette.container,
      borderRadius: 8,
      padding: 12,
    },
    pictureContainer: {
      backgroundColor: palette.background,
      width: '100%',
      height: 80,
      borderRadius: 8,
    },
    picture: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    name: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
      textAlign: 'center',
    },
    validate: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.text,
      marginTop: 4,
      textAlign: 'center',
    },
  });
};
