import React, { Fragment, useContext, useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import { Feather, Ionicons } from '@expo/vector-icons';

import { SignUpContext, ThemeContext } from '../../../contexts';
import { GENDERS } from '../../../utils/constants';

import {
  BottomSheet,
  Box,
  Button,
  Checkbox,
  Input,
  Option,
} from '../../../components';

import { StepsProgress } from '../components';

import getStyles from './styles';

const Step2 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  const genderBottomSheetRef = useRef(null);

  const {
    currentStep,
    handleNextStep,
    handlePrevStep,
    newUser,
    updateNewUser,
    pregnancy,
    updatePregnancy,
  } = useContext(SignUpContext);

  const [isPregnant, setIsPregnant] = useState(false);

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
    genderBottomSheetRef?.current?.close();
  };

  const updateRiskPregnancy = () => {
    updatePregnancy({ riskPregnancy: !pregnancy.riskPregnancy });
  };

  const updatePregnancyWeeks = (txt) => {
    updatePregnancy({ weeks: txt });
  };

  const handleTogglePregnancy = () => setIsPregnant((prev) => !prev);

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
        <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
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

          <Input
            label="Sexo"
            value={
              newUser.gender === 'M'
                ? 'Masculino'
                : newUser.gender === 'F'
                ? 'Feminino'
                : ''
            }
            onChangeText={updateUserGender}
            onPress={() => genderBottomSheetRef?.current?.collapse()}
            onIconPress={() => genderBottomSheetRef?.current?.collapse()}
            icon="chevron-up"
          />

          {newUser.gender === GENDERS.FEMALE && (
            <Box style={{ marginVertical: 24 }}>
              <Checkbox
                value="Estou grávida"
                onPress={handleTogglePregnancy}
                isSelected={isPregnant}
              />
            </Box>
          )}

          {newUser.gender === GENDERS.FEMALE && isPregnant && (
            <Fragment>
              <Input
                label="Semanas de gravidez"
                value={pregnancy.weeks}
                onChangeText={updatePregnancyWeeks}
                keyboardType="numeric"
                returnKeyType="done"
                containerStyle={{ marginBottom: 24 }}
              />

              <Checkbox
                value="É uma gravidez de risco"
                onPress={updateRiskPregnancy}
                isSelected={pregnancy.riskPregnancy}
              />
            </Fragment>
          )}
        </ScrollView>
      </Box>

      <Box style={styles.footer}>
        <Button
          text="Próximo"
          icon="arrow-right-circle"
          onPress={onNextStepPress}
          isDisabled={!shouldAdvance}
        />
      </Box>

      <BottomSheet
        ref={genderBottomSheetRef}
        snapPoints={['32%']}
        title="Escolha um sexo"
        description="Toque para selecionar"
      >
        <Option
          value="Masculino"
          renderIcon={() => (
            <Ionicons name="md-male" size={20} color={theme.title} />
          )}
          onPress={() => updateUserGender(GENDERS.MALE)}
          isSelected={newUser.gender === GENDERS.MALE}
          style={{ marginBottom: 12 }}
        />

        <Option
          value="Feminino"
          renderIcon={() => (
            <Ionicons name="md-female" size={20} color={theme.title} />
          )}
          onPress={() => updateUserGender(GENDERS.FEMALE)}
          isSelected={newUser.gender === GENDERS.FEMALE}
        />
      </BottomSheet>
    </Box>
  );
};

export default Step2;
