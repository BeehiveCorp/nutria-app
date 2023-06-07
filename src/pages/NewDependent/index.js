import React, { useContext, useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Image } from 'expo-image';
import { Masks } from 'react-native-mask-input';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { DependentService } from '../../services';
import { ThemeContext, UserContext } from '../../contexts';
import { serializeDateFormat, triggerToast } from '../../utils/global';
import { GENDERS, TOAST_VARIANTS } from '../../utils/constants';

import { BottomSheet, Box, Button, Input, Option } from '../../components';

import getStyles from './styles';

const NewDependent = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const styles = getStyles();

  const genderBottomSheetRef = useRef(null);

  const [avatarBase64, setAvatarBase64] = useState(null);
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

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

  const generateDependentPayload = () => ({
    user_id: 18,
    name,
    birth_date: serializeDateFormat(birthDate),
    gender,
    avatar: avatarBase64,
    height,
    weight,
  });

  const onAddPress = async () => {
    const payload = generateDependentPayload();

    const { error } = await DependentService.create({ payload });

    if (error) {
      triggerToast({ message: 'Algo deu errado', variant: TOAST_VARIANTS.ERROR });
    }

    navigation.goBack();
  };

  const shouldAdd = [name, birthDate, gender, height, weight].every(
    (field) => field.length > 0
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Box style={styles.header} horizontal alignItemsCenter>
          <TouchableOpacity onPress={navigation.goBack}>
            <Feather name="arrow-left" size={26} color={theme.title} />
          </TouchableOpacity>

          <Text style={styles.title}>Novo dependente</Text>
        </Box>

        <Box style={{ marginTop: 32 }}>
          <Box style={styles.avatarContainer} alignItemsCenter>
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

          <Input
            label="Nome"
            value={name}
            onChangeText={setName}
            containerStyle={{ marginBottom: 24 }}
          />

          <Input
            label="Data de nascimento"
            value={birthDate}
            onChangeText={setBirthDate}
            containerStyle={{ marginBottom: 24 }}
            mask={Masks.DATE_DDMMYYYY}
          />

          <Input
            label="Sexo"
            value={
              gender === GENDERS.MALE
                ? 'Masculino'
                : gender === GENDERS.FEMALE
                ? 'Feminino'
                : ''
            }
            onPress={() => genderBottomSheetRef?.current?.collapse()}
            onIconPress={() => genderBottomSheetRef?.current?.collapse()}
            containerStyle={{ marginBottom: 24 }}
          />

          <Input
            label="Peso (KG)"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
            returnKeyType="done"
            containerStyle={{ marginBottom: 24 }}
          />

          <Input
            label="Altura (CM)"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
            returnKeyType="done"
            containerStyle={{ marginBottom: 24 }}
          />

          <Button
            text="Adicionar"
            icon="plus-circle"
            onPress={onAddPress}
            isDisabled={!shouldAdd}
          />
        </Box>
      </ScrollView>

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
          onPress={() => {
            setGender(GENDERS.MALE);
            genderBottomSheetRef?.current?.close();
          }}
          isSelected={gender === GENDERS.MALE}
          style={{ marginBottom: 12 }}
        />

        <Option
          value="Feminino"
          renderIcon={() => (
            <Ionicons name="md-female" size={20} color={theme.title} />
          )}
          onPress={() => {
            setGender(GENDERS.FEMALE);
            genderBottomSheetRef?.current?.close();
          }}
          isSelected={gender === GENDERS.FEMALE}
        />
      </BottomSheet>
    </View>
  );
};

export default NewDependent;
