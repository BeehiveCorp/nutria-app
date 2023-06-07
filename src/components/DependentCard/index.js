import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { Image } from 'expo-image';

import { getFormattedBase64 } from '../../utils/global';
import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const DependentCard = ({ avatar, name, birthDate, onPress }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const { navigate } = useNavigation();

  const onAvatarPress = () => {
    navigate('Profile');
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
      <Box alignItemsCenter>
        <Box justifyContentCenter alignItemsCenter style={styles.avatarContainer}>
          {avatar ? (
            <Image
              source={{ uri: getFormattedBase64(avatar) }}
              style={styles.avatar}
            />
          ) : (
            <Feather name="user" size={24} color={theme.text} />
          )}
        </Box>

        <Box style={{ marginTop: 16 }}>
          <Text style={styles.name}>{name}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default DependentCard;
