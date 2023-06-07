import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import { ThemeContext, UserContext } from '../../contexts';
import { DependentService, ExamService } from '../../services';

import { TOAST_VARIANTS } from '../../utils/constants';
import { triggerToast } from '../../utils/global';

import {
  Box,
  UserHeader,
  DependentCard,
  Button,
  NutrientCard,
} from '../../components';

import getStyles from './styles';

const Home = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  const [dependents, setDependents] = useState([]);
  const [exams, setExams] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const onAddDependent = () => {
    navigation.navigate('NewDependent');
  };

  const onAddExamPress = () => {
    navigation.navigate('NewExam', {
      userId: user.id,
    });
  };

  const onEstablishmentsPress = () => {
    triggerToast({
      variant: TOAST_VARIANTS.INFO,
      message: 'Em desenvolvimento',
    });
  };

  const fetchDependents = async () => {
    const { data, error } = await DependentService.getAllByUserId({ id: user.id });

    if (error) {
      triggerToast({ message: error, variant: TOAST_VARIANTS.ERROR });
      navigation.goBack();
      return;
    }

    setDependents(data);
  };

  const fetchExams = async () => {
    const { data, error } = await ExamService.getAllByUserOrDependentId({
      userId: user.id,
    });

    if (error) {
      triggerToast({ message: error, variant: TOAST_VARIANTS.ERROR });
      return;
    }

    setExams(data);
  };

  const fetchLastExam = async () => {
    const { data, error } = await ExamService.getById({ id: exams[0].id });

    if (error) {
      triggerToast({ message: 'Algo deu errado', variant: TOAST_VARIANTS.ERROR });
      navigation.goBack();
      return;
    }

    setNutrients(data.nutrients.filter((nutrient) => nutrient.result < 50));
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchDependents();
      fetchExams();
      fetchLastExam();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Box style={styles.boundaries}>
          <UserHeader />
        </Box>

        <Box style={styles.section}>
          <Box style={styles.boundaries}>
            <Text style={styles.label}>Dependentes</Text>
          </Box>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
          >
            {dependents.map((dependent) => (
              <Box style={{ marginRight: 8 }}>
                <DependentCard
                  key={dependent.id}
                  avatar={dependent.avatar}
                  name={dependent.name}
                  birthDate={dependent.birth_date}
                />
              </Box>
            ))}

            <TouchableOpacity activeOpacity={0.8} onPress={onAddDependent}>
              <Box justifyContentCenter alignItemsCenter style={styles.addDependent}>
                <Feather name="plus" size={24} color={theme.accent} />
              </Box>
            </TouchableOpacity>
          </ScrollView>
        </Box>

        {exams.length === 0 && (
          <Box style={{ ...styles.section, ...styles.boundaries }}>
            <Box style={styles.cardContainer}>
              <Feather size={24} color={theme.accent} name="activity" />

              <Text style={styles.cardTitle}>Faça um exame</Text>

              <Text style={styles.cardDescription}>
                Preciamos que adicione um exame de sangue para ter todas as
                funcionalidades do aplicativo.
              </Text>

              <Button text="Adicionar" icon="plus-circle" onPress={onAddExamPress} />
            </Box>
          </Box>
        )}

        {nutrients.length > 0 && (
          <Box style={{ ...styles.section, ...styles.boundaries }}>
            <Box style={styles.cardContainer}>
              <Feather size={24} color={theme.accent} name="cpu" />

              <Text style={styles.cardTitle}>Sabemos te ajudar</Text>

              <Text style={styles.cardDescription}>
                Baseado em seus exames de sangue, nossa inteligência artificial
                considera os seguintes nutritentes importantes para você.
              </Text>

              {nutrients?.map((nutrient) => (
                <NutrientCard
                  key={nutrient.id}
                  symbol={nutrient.symbol}
                  name={nutrient.name}
                  description={nutrient.description}
                  result={nutrient.result}
                  containerStyle={{ paddingHorizontal: 0 }}
                />
              ))}
            </Box>
          </Box>
        )}

        <Box style={{ ...styles.section, ...styles.boundaries }}>
          <Text style={styles.label}>Serviços</Text>

          <Box horizontal style={{ marginTop: 16 }}>
            <TouchableOpacity
              style={{ flex: 1, marginRight: 24 }}
              activeOpacity={0.8}
            >
              <Box style={styles.cardContainer}>
                <Feather size={24} color={theme.accent} name="shopping-bag" />
                <Text style={styles.cardTitle2}>Comércios</Text>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={0.8}
              onPress={onEstablishmentsPress}
            >
              <Box style={styles.cardContainer}>
                <Feather size={24} color={theme.accent} name="coffee" />
                <Text style={styles.cardTitle2}>Estabelecimentos</Text>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Home;
