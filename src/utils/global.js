import Toast from 'react-native-toast-message';

import { TOAST_VARIANTS } from './constants';

export const triggerToast = ({
  variant = TOAST_VARIANTS.WARNING,
  message,
  description,
  duration = 1000 * 3,
}) =>
  Toast.show({
    type: variant,
    props: {
      message,
      description,
    },
    visibilityTime: duration,
  });
