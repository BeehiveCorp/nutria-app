import React, { useContext, useEffect, useState, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import moment from 'moment';
import { Feather } from '@expo/vector-icons';

import { ThemeContext } from '../../contexts';
import { TOAST_VARIANTS } from '../../utils/constants';
import { triggerToast } from '../../utils/global';
import { ExamService } from '../../services';
import { Box, NutrientCard, BottomSheet } from '../../components';

import getStyles from './styles';

const ExamDetails = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const nutrientBottomSheetRef = useRef(null);

  const [exam, setExam] = useState([]);
  const [selectedNutrient, setSelectedNutrient] = useState(null);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Box style={styles.header} horizontal alignItemsCenter>
          <TouchableOpacity onPress={navigation.goBack}>
            <Feather name="arrow-left" size={26} color={theme.title} />
          </TouchableOpacity>

          <Text style={styles.title}>{moment(exam?.date).format('DD/MM/YYYY')}</Text>
        </Box>

        <Box style={{ marginTop: 32 }}>
          <Box style={styles.location} horizontal spaceBetween>
            <Text style={styles.data}>{exam?.local}</Text>
          </Box>

          {exam?.nutrients?.map((nutrient) => (
            <Box key={nutrient.id} style={styles.row} horizontal spaceBetween>
              <NutrientCard
                symbol={nutrient.symbol}
                name={nutrient.name}
                description={nutrient.description}
                result={nutrient.result}
                onPress={() => {
                  nutrientBottomSheetRef?.current?.collapse();
                  setSelectedNutrient(nutrient);
                }}
              />
            </Box>
          ))}
        </Box>
      </ScrollView>

      <BottomSheet
        ref={nutrientBottomSheetRef}
        snapPoints={['45%']}
        title={selectedNutrient?.name}
        description={`Simbolo/identificador: ${selectedNutrient?.symbol}`}
      >
        <Text style={styles.bottomSheetNutrientDescription}>
          {selectedNutrient?.description}
        </Text>
      </BottomSheet>
    </View>
  );
};

export default ExamDetails;
