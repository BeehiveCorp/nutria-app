import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../contexts';

import { Box, Input, NutriaLogo } from '../../components';

import getStyles from './styles';

const Login = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Box alignItemsCenter justifyContentCenter style={styles.logo}>
        <NutriaLogo iconOnly iconColor={theme.title} size={48} />
      </Box>

      <Box style={styles.content}>
        <Text style={styles.title}>Boas vindas!</Text>

        <Box horizontal alignItemsCenter style={styles.descriptionContainer}>
          <Text style={styles.description}>Faça login ou </Text>

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.link}>crie uma nova conta</Text>
          </TouchableOpacity>

          <Text style={styles.description}>.</Text>
        </Box>

        <Box style={styles.form}>
          <Box style={{ marginBottom: 16 }}>
            <Input label="Email" onChangeText={setEmail} />
          </Box>

          <Input label="Senha" icon="coffee" isPassword onChangeText={setPassword} />
        </Box>
      </Box>
    </View>
  );
};

export default Login;
