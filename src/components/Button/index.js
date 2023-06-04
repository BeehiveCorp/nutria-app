import React, { useContext } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const Button = ({ onPress, text, icon, isLoading }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Box horizontal justifyContentCenter alignItemsCenter style={styles.container}>
        {!!text && <Text style={styles.text}>{text}</Text>}
        {!!icon && <Feather name={icon} size={20} color={theme.background} />}
        {isLoading && <ActivityIndicator />}
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
