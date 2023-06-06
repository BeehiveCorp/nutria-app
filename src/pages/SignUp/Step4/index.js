import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { Image } from 'expo-image';

import { Feather } from '@expo/vector-icons';

import UserService from '../../../services/UserService';

import { triggerToast, serializeDateFormat } from '../../../utils/global';
import { TOAST_VARIANTS } from '../../../utils/constants';

import { SignUpContext, ThemeContext, UserContext } from '../../../contexts';
import { Box, Button } from '../../../components';
import { StepsProgress } from '../components';

import getStyles from './styles';

const Step4 = ({ navigation }) => {
  const styles = getStyles();
  const { theme } = useContext(ThemeContext);

  const { currentStep, handlePrevStep, newUser, pregnancy, isPregnant } =
    useContext(SignUpContext);

  const { storeUser } = useContext(UserContext);

  const [avatarBase64, setAvatarBase64] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPrevStepPress = () => {
    navigation.goBack();
    handlePrevStep();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.3,
      base64: true,
    });

    if (result.canceled) return;

    const base64 = result?.assets[0].base64;
    setAvatarBase64(base64);
  };

  const generateAccountPayload = () => {
    const payload = {
      ...newUser,
      avatar: avatarBase64 ?? null,
      weight: parseFloat(newUser.weight.replace(',', '.')),
      height: parseFloat(newUser.height.replace(',', '.')),
      birth_date: serializeDateFormat(newUser.birthDate),

      is_pregnant: isPregnant,

      ...pregnancy,
      risk_pregnancy: pregnancy.riskPregnancy,
    };

    delete payload.birthDate;
    delete payload.riskPregnancy;

    return payload;
  };

  const createAccount = async () => {
    setIsLoading(true);

    const payload = generateAccountPayload();

    const { data, error } = await UserService.create({ payload });

    if (error) {
      triggerToast({ variant: TOAST_VARIANTS.ERROR, message: error });
    }

    if (data?.id) storeUser(data);

    setIsLoading(false);
  };

  return (
    <Box style={styles.container}>
      <StepsProgress currentStep={currentStep} totalSteps={4} />

      <Box style={styles.header}>
        <TouchableOpacity onPress={onPrevStepPress}>
          <Feather name="arrow-left" size={26} color={theme.title} />
        </TouchableOpacity>

        <Text style={styles.title}>Tudo pronto!</Text>
        <Text style={styles.description}>Se quiser, pode adicionar uma foto :)</Text>
      </Box>

      <Box style={styles.content} alignItemsCenter>
        <TouchableOpacity activeOpacity={0.8} onPress={pickImage}>
          {avatarBase64 === null ? (
            <Box justifyContentCenter alignItemsCenter style={styles.avatar}>
              <Feather name="user" size={64} color={theme.text} />

              <Box justifyContentCenter alignItemsCenter style={styles.add}>
                <Feather name="plus" size={20} color={theme.accent} />
              </Box>
            </Box>
          ) : (
            <Image
              source={{ uri: `data:image/png;base64,${avatarBase64}` }}
              style={styles.avatar}
            />
          )}
        </TouchableOpacity>
      </Box>

      <Box style={styles.footer}>
        <Button
          text="Criar conta"
          icon="log-in"
          onPress={createAccount}
          isLoading={isLoading}
          isDisabled={isLoading}
        />
      </Box>
    </Box>
  );
};

export default Step4;
