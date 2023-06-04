import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import getStyles from './styles';

const Profile = () => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
