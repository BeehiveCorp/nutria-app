import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, FONT_FAMILIES, GLOBAL_SIZES } from '../../theme';
import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {
      padding: 16,
      width: GLOBAL_SIZES.deviceWidth - GLOBAL_SIZES.horizontalSpacing * 2,
      borderRadius: 8,
      flexDirection: 'row',
      overflow: 'hidden',
    },
    content: {
      marginLeft: 16,
      flexShrink: 1,
    },
    message: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
    },
    description: {
      fontSize: FONT_SIZES.small,
      fontFamily: FONT_FAMILIES.montserrat.regular,
      color: palette.text,
      lineHeight: FONT_SIZES.small * 1.6,
    },
  });
};
