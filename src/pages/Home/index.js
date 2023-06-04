import React, { useContext } from 'react';
import { View } from 'react-native';

import { ThemeContext, UserContext } from '../../contexts';

import getStyles from './styles';
import { Button } from '../../components';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { logout } = useContext(UserContext);

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Button text="Logout" onPress={logout} />
    </View>
  );
};

export default Home;
