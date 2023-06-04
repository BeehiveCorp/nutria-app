import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ThemeContext, UserContext } from '../../contexts';
import { Box, Button, Input, NutriaLogo } from '../../components';
import { UserService } from '../../services';

import getStyles from './styles';

const Login = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
  const styles = getStyles(theme);

  const [email, setEmail] = useState('davidalmeida154of@gmail.com');
  const [password, setPassword] = useState('123');

  const login = async (email, password) => {
    const { data, error } = await UserService.login({ email, password });

    if (error) {
      console.log(error);
      return;
    }

    setUser(data);
  };

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
            <Input label="Email" onChangeText={setEmail} value={email} />
          </Box>

          <Box style={{ marginBottom: 16 }}>
            <Input
              label="Senha"
              isPassword
              onChangeText={setPassword}
              value={password}
            />
          </Box>

          <Box>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </Box>

          <Button
            text="Entrar"
            icon="arrow-right-circle"
            onPress={() => {
              login(email, password);
            }}
          />
        </Box>
      </Box>
    </View>
  );
};

export default Login;
