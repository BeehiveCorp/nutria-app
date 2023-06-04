import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SignUpContext, ThemeContext } from '../../../contexts';
import { Box, Button, Input } from '../../../components';
import { StepsProgress } from '../components';

import getStyles from './styles';

const Step4 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  const { currentStep, handlePrevStep } = useContext(SignUpContext);

  const onNextStepPress = () => {
    // navigation.navigate('SignUpStep2');
  };

  const onPrevStepPress = () => {
    navigation.goBack();
    handlePrevStep();
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
          O primeiro passo é escolher um username disponível e nos dizer seu nome.
        </Text>
      </Box>

      <Box style={styles.content}>
        <Input />
      </Box>

      <Box style={styles.footer}>
        {/* <Button text="Próximo" icon="arrow-right-circle" onPress={onNextStepPress} /> */}
      </Box>
    </Box>
  );
};

export default Step4;
