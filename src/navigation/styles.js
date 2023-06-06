import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../theme';
import { ThemeContext } from '../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  const tabItemWidth = 60;
  const tabWidth = tabItemWidth * 2;

  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: tabWidth,
      height: tabItemWidth,
      bottom: 24,
      left: (GLOBAL_SIZES.deviceWidth - tabWidth) / 2,
      borderColor: palette.border,
      borderTopColor: palette.border,
      borderWidth: 3,
      borderTopWidth: 3,
      borderRadius: tabWidth,
      elevation: 0,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    background: {
      ...StyleSheet.absoluteFill,
      borderRadius: tabWidth,
      overflow: 'hidden',
      backgroundColor: 'transparent',
    },
    blur: {
      width: tabWidth,
      ...StyleSheet.absoluteFill,
    },
  });
};
