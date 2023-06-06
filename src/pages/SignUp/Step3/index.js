import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SignUpContext, ThemeContext } from '../../../contexts';
import { Box, Button, Input } from '../../../components';
import { StepsProgress } from '../components';

import getStyles from './styles';

const Step3 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  const [passwordRepeat, setPasswordRepeat] = useState();

  const { currentStep, handleNextStep, handlePrevStep, newUser, updateNewUser } =
    useContext(SignUpContext);

  const onNextStepPress = () => {
    navigation.navigate('SignUpStep4');
    handleNextStep();
  };

  const onPrevStepPress = () => {
    navigation.goBack();
    handlePrevStep();
  };

  const updateUserPassword = (txt) => {
    updateNewUser({ password: txt });
  };

  const shouldAdvance =
    newUser.password !== '' && newUser.password === passwordRepeat;

  return (
    <Box style={styles.container}>
      <StepsProgress currentStep={currentStep} totalSteps={4} />

      <Box style={styles.header}>
        <TouchableOpacity onPress={onPrevStepPress}>
          <Feather name="arrow-left" size={26} color={theme.title} />
        </TouchableOpacity>

        <Text style={styles.title}>Crie uma senha</Text>
        <Text style={styles.description}>Defina uma senha segura.</Text>
      </Box>

      <Box style={styles.content}>
        <Input
          label="Nova senha"
          value={newUser.password}
          onChangeText={updateUserPassword}
          containerStyle={{ marginBottom: 24 }}
          isPassword
        />

        <Input
          label="Repita a nova senha"
          value={passwordRepeat}
          onChangeText={setPasswordRepeat}
          isPassword
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

export default Step3;
