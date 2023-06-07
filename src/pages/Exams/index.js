import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import moment from 'moment';
import { Feather } from '@expo/vector-icons';

import { ThemeContext } from '../../contexts';
import { TOAST_VARIANTS } from '../../utils/constants';
import { triggerToast } from '../../utils/global';
import { ExamService } from '../../services';
import { Box, Option } from '../../components';

import getStyles from './styles';

const Exams = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  const [exams, setExams] = useState([]);

  const userId = route.params?.userId ?? null;
  const dependentId = route.params?.dependentId ?? null;

  const getAllUserExams = async () => {
    const { data, error } = await ExamService.getAllByUserOrDependentId({
      userId,
      dependentId,
    });

    if (error) {
      triggerToast({ message: error, variant: TOAST_VARIANTS.ERROR });
      navigation.goBack();
      return;
    }

    setExams(data);
  };

  const onFABPress = () => {
    navigation.navigate('NewExam', {
      userId,
      dependentId,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllUserExams();
    }, [])
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

          <Text style={styles.title}>Meus exames</Text>
        </Box>

        <Box style={{ marginTop: 32 }}>
          {exams?.map((exam) => (
            <Option
              key={exam.id}
              value={moment(exam.date).format('DD/MM/YYYY')}
              style={{ marginBottom: 8 }}
              onPress={() => navigation.navigate('ExamDetails', { id: exam.id })}
            />
          ))}
        </Box>
      </ScrollView>

      <TouchableOpacity activeOpacity={0.8} onPress={onFABPress} style={styles.FAB}>
        <Box justifyContentCenter alignItemsCenter>
          <Feather name="plus" size={24} color={theme.background} />
        </Box>
      </TouchableOpacity>
    </View>
  );
};

export default Exams;
