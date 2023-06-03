import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../contexts';

import getStyles from './styles';

const Login = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Qual</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <Text style={styles.screenText}>Ir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
