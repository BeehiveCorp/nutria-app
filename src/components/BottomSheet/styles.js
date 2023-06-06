import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Palette, FONT_SIZES, FONT_FAMILIES } from '../../theme';

import { ThemeContext } from '../../contexts';

export default getStyles = () => {
  const { theme } = useContext(ThemeContext);
  const palette = new Palette(theme);

  return StyleSheet.create({
    sheetBackground: {
      backgroundColor: theme.container,
    },
    sheetContainer: {
      marginBottom: -20,
    },
    sheet: {
      marginHorizontal: 4,
    },
    handle: {
      top: -26,
    },
    handleIndicator: {
      backgroundColor: palette.text,
    },
    container: {
      flex: 1,
      marginTop: -20,
      padding: 24,
    },
    text: {
      fontSize: FONT_SIZES.medium,
      fontFamily: FONT_FAMILIES.montserrat.bold,
      color: palette.title,
      paddingHorizontal: 8,
    },
  });
};
