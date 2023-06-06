import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Feather, Ionicons } from '@expo/vector-icons';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const Option = ({ onPress, value, isSelected, style, renderIcon }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>
      <Box
        spaceBetween
        horizontal
        alignItemsCenter
        style={styles.bottomSheetOption(isSelected)}
      >
        <Box horizontal alignItemsCenter>
          {renderIcon && renderIcon()}
          <Text style={styles.bottomSheetOptionTitle}>{value}</Text>
        </Box>

        <Feather name="chevron-right" size={20} color={theme.title} />
      </Box>
    </TouchableOpacity>
  );
};

export default Option;
