import { Dimensions } from 'react-native';
import { THEME } from '../utils/constants';

const STATUS_COLORS_SCHEME = Object.freeze({
  error: '#FF3838',
  warning: '#FFB302',
  success: '#00F060',
  available: '#2DCCFF',
});

export const COLORS_SCHEME = Object.freeze({
  [THEME.DARK]: {
    accent: '#00F060',
    background: '#000000',
    container: '#0E0E0E',
    border: '#262626',
    title: '#FFFFFF',
    text: '#FFFFFF60',
    ...STATUS_COLORS_SCHEME,
  },
  [THEME.LIGHT]: {
    accent: '#00F060',
    background: '#FFFFFF',
    container: '#FAFAFA',
    border: '#EAEAEA',
    title: '#000000',
    text: '#00000060',
    ...STATUS_COLORS_SCHEME,
  },
});

export class Palette {
  constructor({
    accent = '',
    background = '',
    container = '',
    border = '',
    title = '',
    text = '',
    error = '',
    warning = '',
    success = '',
    available = '',
  } = {}) {
    this.accent = accent;
    this.background = background;
    this.container = container;
    this.border = border;
    this.title = title;
    this.text = text;
    this.error = error;
    this.warning = warning;
    this.success = success;
    this.available = available;
  }
}

export const GLOBAL_SIZES = Object.freeze({
  horizontalSpacing: 24,
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
});

export const FONT_SIZES = Object.freeze({
  biggest: 27,
  big: 24,
  medium: 16,
  small: 12,
  smallest: 10,
});

export const FONT_FAMILIES = Object.freeze({
  montserrat: {
    regular: 'Montserrat_400Regular',
    semiBold: 'Montserrat_600SemiBold',
    bold: 'Montserrat_700Bold',
  },
});
