import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext } from '../../contexts';

import getStyles from './styles';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
