import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';

import { Image } from 'expo-image';

import { UserContext } from '../../contexts';

import { getFormattedBase64 } from '../../utils/global';

import { Button } from '../../components';

import getStyles from './styles';

const Home = () => {
  const { user, logout } = useContext(UserContext);

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: getFormattedBase64(user.avatar) }}
          style={styles.avatar}
        />
        <Button text="Logout" onPress={logout} />

        <Image
          source={{ uri: getFormattedBase64(user.avatar) }}
          style={styles.avatar}
        />
        <Button text="Logout" onPress={logout} />

        <Image
          source={{ uri: getFormattedBase64(user.avatar) }}
          style={styles.avatar}
        />
        <Button text="Logout" onPress={logout} />

        <Image
          source={{ uri: getFormattedBase64(user.avatar) }}
          style={styles.avatar}
        />
        <Button text="Logout" onPress={logout} />

        <Image
          source={{ uri: getFormattedBase64(user.avatar) }}
          style={styles.avatar}
        />
        <Button text="Logout" onPress={logout} />

        <Image
          source={{ uri: getFormattedBase64(user.avatar) }}
          style={styles.avatar}
        />
        <Button text="Logout" onPress={logout} />
      </ScrollView>
    </View>
  );
};

export default Home;
