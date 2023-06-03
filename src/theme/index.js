import { Dimensions } from 'react-native';
import { THEME } from '../utils/constants';

export const COLORS_SCHEME = Object.freeze({
  [THEME.DARK]: {
    accent: '#00F060',
    background: '#000000',
    container: '#181818',
    title: '#FFFFFF',
    text: '#FFFFFF50',
  },
  [THEME.LIGHT]: {
    accent: '#00F060',
    background: '#F9F8FD',
    container: '#FFFFFF',
    title: '#000000',
    text: '#00000050',
  },
});

export class Palette {
  constructor({
    accent = '',
    background = '',
    container = '',
    title = '',
    text = '',
  } = {}) {
    this.accent = accent;
    this.background = background;
    this.container = container;
    this.title = title;
    this.text = text;
  }
}

export const GLOBAL_SIZES = Object.freeze({
  horizontalSpacing: 24,
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
});

export const FONT_SIZES = Object.freeze({
  h1: 24,
  h2: 16,
  p: 12,
});

export const FONT_FAMILIES = Object.freeze({
  montserrat: {
    regular: 'Montserrat_400Regular',
    semiBold: 'Montserrat_600SemiBold',
    bold: 'Montserrat_700Bold',
  },
});
