import React, { memo, useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const Checkbox = ({ onPress, value, isSelected }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Box horizontal alignItemsCenter>
        <Box
          justifyContentCenter
          alignItemsCenter
          style={styles.container(isSelected)}
        >
          {isSelected && <Feather size={10} color={theme.accent} name="check" />}
        </Box>

        <Text style={styles.value(isSelected)}>{value}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Checkbox;
