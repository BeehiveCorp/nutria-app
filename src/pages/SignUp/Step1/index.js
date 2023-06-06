import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Masks } from 'react-native-mask-input';

import { Feather } from '@expo/vector-icons';

import UserService from '../../../services/UserService';

import { SignUpContext, ThemeContext } from '../../../contexts';
import { Box, Button, Input } from '../../../components';
import { StepsProgress } from '../components';

import getStyles from './styles';

const Step1 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  const { currentStep, handleNextStep, newUser, updateNewUser } =
    useContext(SignUpContext);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const onNextStepPress = () => {
    navigation.navigate('SignUpStep2');
    handleNextStep();
  };

  const onPrevStepPress = () => {
    navigation.goBack();
  };

  const updateUserName = (txt) => {
    updateNewUser({ name: txt });
  };

  const updateUserEmail = async (txt) => {
    updateNewUser({ email: txt });

    const { data } = await UserService.checkUserExistence({ email: txt });

    if (data !== null) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);
  };

  const updateBirthDate = (txt) => {
    updateNewUser({ birthDate: txt });
  };

  const shouldAdvance =
    newUser.name !== '' &&
    newUser.email !== '' &&
    isEmailValid &&
    newUser.birthDate.length === 10;

  return (
    <Box style={styles.container}>
      <StepsProgress currentStep={currentStep} totalSteps={4} />

      <Box style={styles.header}>
        <TouchableOpacity onPress={onPrevStepPress}>
          <Feather name="arrow-left" size={26} color={theme.title} />
        </TouchableOpacity>

        <Text style={styles.title}>Vamos criar sua conta</Text>
        <Text style={styles.description}>Nos conte o básico.</Text>
      </Box>

      <Box style={styles.content}>
        <Input
          label="Nome"
          value={newUser.name}
          onChangeText={updateUserName}
          containerStyle={{ marginBottom: 24 }}
        />

        <Input
          label="E-mail"
          value={newUser.email}
          onChangeText={updateUserEmail}
          containerStyle={{ marginBottom: 24 }}
          errorMessage={isEmailValid ? null : 'Email em uso'}
        />

        <Input
          label="Data de nascimento"
          value={newUser.birthDate}
          onChangeText={updateBirthDate}
          mask={Masks.DATE_DDMMYYYY}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </Box>

      <Box style={styles.footer}>
        <Button
          text="Próximo"
          icon="arrow-right-circle"
          onPress={onNextStepPress}
          isDisabled={!shouldAdvance}
        />
      </Box>
    </Box>
  );
};

export default Step1;
