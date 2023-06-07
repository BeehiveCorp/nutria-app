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
      padding: 12,
    },
    avatarContainer: {
      backgroundColor: palette.background,
      height: 48,
      width: 48,
      borderRadius: 8,
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    name: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
    },
    address: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
      marginTop: 4,
    },
  });
};
