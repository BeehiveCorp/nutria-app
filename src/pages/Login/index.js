import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext } from '../../contexts';

import { NutriaLogo } from '../../components';

import getStyles from './styles';

const Login = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <NutriaLogo iconOnly iconColor={theme.title} />
    </View>
  );
};

export default Login;
