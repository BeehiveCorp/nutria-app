import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Image } from 'expo-image';

import { getFormattedBase64 } from '../../utils/global';
import { MONTHS, WEEKDAYS } from '../../utils/constants';
import { UserContext } from '../../contexts';

import { Box } from '../';

import getStyles from './styles';

const UserHeader = () => {
  const { user } = useContext(UserContext);
  const styles = getStyles();

  const { navigate } = useNavigation();

  const onAvatarPress = () => {
    navigate('Profile');
  };

  const date = new Date();

  const month = MONTHS[date.getMonth()];
  const weekday = WEEKDAYS[date.getDay() - 1];
  const day = date.getDate();

  return (
    <Box horizontal alignItemsCenter style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onAvatarPress}>
        <Image
          source={{ uri: getFormattedBase64(user.avatar) }}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <Box style={{ marginLeft: 20 }}>
        <Text style={styles.name}>Bom te ver, {user?.name}</Text>
        <Text style={styles.time}>
          {weekday}, {day} {month}
        </Text>
      </Box>
    </Box>
  );
};

export default UserHeader;
