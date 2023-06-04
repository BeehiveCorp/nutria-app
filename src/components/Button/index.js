import React, { useContext } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const Button = ({ onPress, text, icon, isLoading, isDisabled = false }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} disabled={isDisabled}>
      <Box
        horizontal
        justifyContentCenter
        alignItemsCenter
        style={styles.container(isDisabled)}
      >
        {!!text && <Text style={styles.text(isDisabled)}>{text}</Text>}

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          !!icon && (
            <Feather
              name={icon}
              size={20}
              color={isDisabled ? theme.border : theme.background}
            />
          )
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
