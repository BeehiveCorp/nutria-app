import React, { useContext, useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SignUpContext, ThemeContext } from '../../../contexts';
import { BottomSheet, Box, Button, Input } from '../../../components';
import { StepsProgress } from '../components';

import getStyles from './styles';

const Step2 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  const genderBottomSheetRef = useRef(null);

  const { currentStep, handleNextStep, handlePrevStep, newUser, updateNewUser } =
    useContext(SignUpContext);

  const onNextStepPress = () => {
    navigation.navigate('SignUpStep3');
    handleNextStep();
  };

  const onPrevStepPress = () => {
    navigation.goBack();
    handlePrevStep();
  };

  const updateUserWeight = (txt) => {
    updateNewUser({ weight: txt });
  };

  const updateUserHeight = (txt) => {
    updateNewUser({ height: txt });
  };

  const updateUserGender = (txt) => {
    updateNewUser({ gender: txt });
  };

  const shouldAdvance =
    newUser.weight !== '' && newUser.height !== '' && newUser.gender !== '';

  return (
    <Box style={styles.container}>
      <StepsProgress currentStep={currentStep} totalSteps={4} />

      <Box style={styles.header}>
        <TouchableOpacity onPress={onPrevStepPress}>
          <Feather name="arrow-left" size={26} color={theme.title} />
        </TouchableOpacity>

        <Text style={styles.title}>Nos conte mais</Text>
        <Text style={styles.description}>
          Queremos te conhecer. Caso não saiba, coloque um valor aproximado.
        </Text>
      </Box>

      <Box style={styles.content}>
        <Input
          label="Peso (KG)"
          value={newUser.weight}
          onChangeText={updateUserWeight}
          keyboardType="numeric"
          returnKeyType="done"
          containerStyle={{ marginBottom: 24 }}
        />

        <Input
          label="Altura (CM)"
          value={newUser.height}
          onChangeText={updateUserHeight}
          keyboardType="numeric"
          returnKeyType="done"
          containerStyle={{ marginBottom: 24 }}
        />

        <Input label="Sexo" value={newUser.gender} onChangeText={updateUserGender} />

        <Button
          text="Abrir"
          onPress={() => genderBottomSheetRef?.current?.collapse()}
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

      <BottomSheet ref={genderBottomSheetRef}>
        <Text>Oii</Text>
      </BottomSheet>
    </Box>
  );
};

export default Step2;
