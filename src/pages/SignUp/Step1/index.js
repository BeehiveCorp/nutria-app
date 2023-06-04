import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SignUpContext, ThemeContext } from '../../../contexts';
import { Box, Button, Input } from '../../../components';
import { StepsProgress } from '../components';

import getStyles from './styles';

const Step1 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  const { currentStep, handleNextStep, newUser, updateNewUser } =
    useContext(SignUpContext);

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

  const updateUserEmail = (txt) => {
    updateNewUser({ email: txt });
  };

  return (
    <Box style={styles.container}>
      <StepsProgress currentStep={currentStep} totalSteps={4} />

      <Box style={styles.header}>
        <TouchableOpacity onPress={onPrevStepPress}>
          <Feather name="arrow-left" size={26} color={theme.title} />
        </TouchableOpacity>

        <Text style={styles.title}>Como te chamamos?</Text>
        <Text style={styles.description}>
          O primeiro passo é escolher um nome e nos dizer seu e-mail.
        </Text>
      </Box>

      <Box style={styles.content}>
        <Box style={{ marginBottom: 24 }}>
          <Input label="Nome" value={newUser.name} onChangeText={updateUserName} />
        </Box>

        <Input label="E-mail" value={newUser.email} onChangeText={updateUserEmail} />
      </Box>

      <Box style={styles.footer}>
        <Button text="Próximo" icon="arrow-right-circle" onPress={onNextStepPress} />
      </Box>
    </Box>
  );
};

export default Step1;
