import React, { useContext, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import MaskInput from 'react-native-mask-input';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const Input = ({
  label,
  mask,
  icon,
  isLoading,
  isPassword,
  onChangeText,
  onIconPress,
  placeholder,
  errorMessage,
  ...rest
}) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const onIconContainerPress = () => {
    if (isPassword) {
      setShowPassword((prev) => !prev);
      return;
    }

    onIconPress();
  };

  const Icon = () => {
    let iconName = icon;

    if (isPassword) iconName = showPassword ? 'eye-off' : 'eye';

    return <Feather name={iconName} color={theme.text} size={20} />;
  };

  const color = errorMessage ? theme.error : styles.label.color;
  const borderColor = errorMessage ? theme.error : styles.container.borderColor;

  return (
    <Box>
      {!!label && <Text style={{ ...styles.label, color }}>{label}</Text>}

      <Box horizontal spaceBetween style={{ ...styles.container, borderColor }}>
        <MaskInput
          style={styles.input}
          placeholderTextColor={theme.text}
          placeholder={placeholder}
          selectionColor={errorMessage ? theme.error : theme.accent}
          secureTextEntry={isPassword && !showPassword}
          mask={mask}
          value={value}
          onChangeText={(text, unmasked) => {
            onChangeText(text, unmasked);
            setValue(text);
          }}
          {...rest}
        />

        {(!!icon || isLoading || isPassword) && (
          <TouchableOpacity
            onPress={onIconContainerPress}
            activeOpacity={1}
            style={{ height: '100%' }}
          >
            <Box justifyContentCenter alignItemsCenter style={styles.iconContainer}>
              {isLoading ? <ActivityIndicator /> : <Icon />}
            </Box>
          </TouchableOpacity>
        )}
      </Box>

      {!!errorMessage && (
        <Box horizontal style={styles.messageContainer}>
          <Feather name="alert-circle" size={16} color={theme.error} />
          <Text style={styles.message}>{errorMessage}</Text>
        </Box>
      )}
    </Box>
  );
};

export default Input;
