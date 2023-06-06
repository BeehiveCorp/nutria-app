import React, { useContext } from 'react';

import { Feather } from '@expo/vector-icons';
import chroma from 'chroma-js';

import { ThemeContext } from '../../../contexts';

import { Box } from '../../../components';

import getStyles from './styles';
import { BOTTOM_TABS_PAGES } from '../../../utils/constants';

const Option = ({ focused, pageCode }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const iconName = pageCode === BOTTOM_TABS_PAGES.HOME ? 'home' : 'user';

  return (
    <Box justifyContentCenter alignItemsCenter style={styles.container(focused)}>
      <Feather
        name={iconName}
        color={chroma(theme.title)
          .alpha(focused ? 1 : 0.5)
          .hex()}
        size={24}
      />
    </Box>
  );
};

export default Option;
