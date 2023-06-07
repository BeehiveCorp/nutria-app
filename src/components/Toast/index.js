import React, { useContext } from 'react';
import { Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

import { ThemeContext } from '../../contexts';
import { STATUS_COLORS_SCHEME, STATUS_ICONS } from '../../theme';

import Box from '../Box';

import getStyles from './styles';
import chroma from 'chroma-js';

const Toast = ({ variant, message, description }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const accentColor = STATUS_COLORS_SCHEME[variant];
  const iconName = STATUS_ICONS[variant];

  return (
    <BlurView
      tint="dark"
      intensity={56}
      style={{
        ...styles.container,
        backgroundColor: chroma(accentColor).darken(5).alpha(0.3).hex(),
        alignItems: !!description ? 'flex-start' : 'center',
      }}
    >
      <Feather name={iconName} size={24} color={accentColor} />

      <Box style={styles.content}>
        {!!message && (
          <Text
            style={{
              ...styles.message,
              marginBottom: !!description ? 8 : 0,
              color: !!description ? theme.title : accentColor,
            }}
          >
            {message}
          </Text>
        )}
        {!!description && <Text style={styles.description}>{description}</Text>}
      </Box>
    </BlurView>
  );
};

export default Toast;
