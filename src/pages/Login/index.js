import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ThemeContext, UserContext } from '../../contexts';

import getStyles from './styles';

const Login = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Qual</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <Text style={styles.screenText}>Ir</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleTheme}>
        <Text style={styles.screenText}>toggle theme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setUser({ name: String(Math.random()) })}>
        <Text style={styles.screenText}>change user</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
