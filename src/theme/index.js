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

export class ColorPalette {
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
