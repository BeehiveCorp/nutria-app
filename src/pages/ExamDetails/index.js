import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import moment from 'moment';
import { Feather } from '@expo/vector-icons';

import { ThemeContext } from '../../contexts';
import { TOAST_VARIANTS } from '../../utils/constants';
import { triggerToast } from '../../utils/global';
import { ExamService } from '../../services';
import { Box, NutrientCard } from '../../components';

import getStyles from './styles';

const ExamDetails = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const [exam, setExam] = useState([]);

  const examId = route.params.id;

  const getExam = async () => {
    const { data, error } = await ExamService.getById({ id: examId });

    if (error) {
      triggerToast({ message: 'Algo deu errado', variant: TOAST_VARIANTS.ERROR });
      navigation.goBack();
      return;
    }

    setExam(data);
  };

  useEffect(() => {
    getExam();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Box style={styles.header} horizontal alignItemsCenter>
          <TouchableOpacity onPress={navigation.goBack}>
            <Feather name="arrow-left" size={26} color={theme.title} />
          </TouchableOpacity>

          <Text style={styles.title}>{moment(exam?.date).format('DD/MM/YYYY')}</Text>
        </Box>

        <Box style={{ marginTop: 32 }}>
          <Box style={styles.location} horizontal spaceBetween>
            <Text style={styles.label}>Local</Text>
            <Text style={styles.data}>{exam?.local}</Text>
          </Box>

          {exam?.nutrients?.map((nutrient) => (
            <Box style={styles.row} horizontal spaceBetween>
              <NutrientCard
                symbol={nutrient.symbol}
                name={nutrient.name}
                description={nutrient.description}
                result={nutrient.result}
              />
            </Box>
          ))}
        </Box>
      </ScrollView>
    </View>
  );
};

export default ExamDetails;
