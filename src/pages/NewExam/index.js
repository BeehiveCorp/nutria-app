import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Masks } from 'react-native-mask-input';

import { Feather } from '@expo/vector-icons';

import ExamService from '../../services/ExamService';
import { ThemeContext } from '../../contexts';
import { serializeDateFormat, triggerToast } from '../../utils/global';
import { TOAST_VARIANTS } from '../../utils/constants';
import { Box, Button, Input } from '../../components';

import getStyles from './styles';

const NewExam = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);

  const userId = route.params?.userId ?? null;
  const dependentId = route.params?.dependentId ?? null;

  const styles = getStyles();

  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const [nutrients, setNutrients] = useState([
    { symbol: 'Ca', name: 'Cálcio', result: '' },
    { symbol: 'Zn', name: 'Zinco', result: '' },
    { symbol: 'Alb', name: 'Albumina', result: '' },
    { symbol: 'Lip', name: 'Lipídio', result: '' },
  ]);

  const generateExamPayload = () => ({
    local: location,
    date: serializeDateFormat(date),
    nutrients,
    user_id: userId,
    dependent_id: dependentId,
  });

  const onAddPress = async () => {
    const payload = generateExamPayload();

    const { error } = await ExamService.create({ payload });

    if (error) {
      triggerToast({ message: 'Algo deu errado', variant: TOAST_VARIANTS.ERROR });
    }

    navigation.goBack();
  };

  const shouldAdd =
    location.length > 0 &&
    date.length > 9 &&
    nutrients.every((nutrient) => nutrient.result.length > 0);

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

          <Text style={styles.title}>Novo exame</Text>
        </Box>

        <Box style={{ marginTop: 32 }}>
          <Input
            label="Local"
            value={location}
            onChangeText={setLocation}
            containerStyle={{ marginBottom: 24 }}
          />

          <Input
            label="Data"
            value={date}
            onChangeText={setDate}
            containerStyle={{ marginBottom: 24 }}
            mask={Masks.DATE_DDMMYYYY}
          />

          {nutrients.map((nutrient, idx) => (
            <Input
              key={nutrient.symbol}
              label={nutrient.name}
              value={nutrients[idx].result}
              keyboardType="numeric"
              returnKeyType="done"
              onChangeText={(txt) => {
                const updatedNutrients = [...nutrients];
                updatedNutrients[idx].result = txt;
                setNutrients(updatedNutrients);
              }}
              containerStyle={{ marginBottom: 24 }}
            />
          ))}

          <Button
            text="Adicionar"
            icon="plus-circle"
            onPress={onAddPress}
            isDisabled={!shouldAdd}
          />
        </Box>
      </ScrollView>
    </View>
  );
};

export default NewExam;
