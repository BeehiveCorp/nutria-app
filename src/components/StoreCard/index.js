import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import moment from 'moment';

import { Feather } from '@expo/vector-icons';

import { Image } from 'expo-image';

import { getFormattedBase64 } from '../../utils/global';
import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const StoreCard = ({ store, onPress }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const { id, name, address, avatar } = store;

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
      <Box alignItemsCenter horizontal>
        <Box justifyContentCenter alignItemsCenter style={styles.avatarContainer}>
          {avatar ? (
            <Image
              source={{ uri: getFormattedBase64(avatar) }}
              style={styles.avatar}
            />
          ) : (
            <Feather name="shopping-cart" size={24} color={theme.text} />
          )}
        </Box>

        <Box style={{ marginLeft: 16 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default StoreCard;
