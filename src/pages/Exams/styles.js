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
      paddingTop: 24,
      backgroundColor: palette.background,
      paddingHorizontal: GLOBAL_SIZES.horizontalSpacing,
    },
    title: {
      fontSize: FONT_SIZES.medium + 4,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
      marginLeft: 8,
    },
    FAB: {
      position: 'absolute',
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: palette.accent,
      right: GLOBAL_SIZES.horizontalSpacing,
      bottom: GLOBAL_SIZES.horizontalSpacing * 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
