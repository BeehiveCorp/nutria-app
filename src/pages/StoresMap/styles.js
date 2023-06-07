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
    },
    map: {
      width: '100%',
      height: '100%',
    },
    backContainer: {
      width: 40,
      height: 40,
      backgroundColor: palette.accent,
      position: 'absolute',
      left: 24,
      top: 24,
      borderRadius: 20,
    },
    marker: {
      backgroundColor: palette.background,
      maxWidth: 60,
      padding: 4,
      borderRadius: 8,
    },
    avatarContainer: {
      backgroundColor: palette.container,
      width: '100%',
      height: 48,
      borderRadius: 8,
      marginBottom: 4,
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    name: {
      fontSize: FONT_SIZES.smallest,
      fontFamily: FONT_FAMILIES.montserrat.semiBold,
      color: palette.title,
    },
  });
};
