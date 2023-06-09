import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, GLOBAL_SIZES, FONT_FAMILIES } from '../../../../theme';
import { ThemeContext } from '../../../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    container: {},
    step: (shouldBePainted) => ({
      flex: 1,
      height: 4,
      borderRadius: 8,
      backgroundColor: shouldBePainted ? palette.accent : palette.container,
    }),
  });
};
