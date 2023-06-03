import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { ThemeContext, UserContext } from '../../contexts';
import { THEME } from '../../utils/constants';
import { NutriaLogo } from '../../components';

import getStyles from './styles';

const Splash = ({ navigation }) => {
  const { theme, themeCode } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const styles = getStyles(theme);

  useEffect(() => {
    setTimeout(() => {
      if (user === null) navigation.navigate('Login');
      if (user?.id) navigation.navigate('Explore');
    }, 1000);
  }, [user]);

  return (
    <View style={styles.container}>
      <StatusBar style={themeCode === THEME.DARK ? 'light' : 'dark'} />
      <NutriaLogo size={180} />
      <Text style={styles.poweredBy}>By Beehive</Text>
    </View>
  );
};

export default Splash;
