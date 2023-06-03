import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext } from '../../contexts';

import getStyles from './styles';

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
