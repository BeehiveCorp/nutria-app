import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import moment from 'moment';
import { Feather } from '@expo/vector-icons';

import { ThemeContext, UserContext } from '../../contexts';
import { TOAST_VARIANTS } from '../../utils/constants';
import { triggerToast } from '../../utils/global';
import { ExamService } from '../../services';
import { Box, Option } from '../../components';

import getStyles from './styles';

const Exams = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const [exams, setExams] = useState([]);

  const styles = getStyles();

  const getAllUserExams = async () => {
    const { data, error } = await ExamService.getAllByUserOrDependentId({
      userId: user.id,
    });

    if (error) {
      triggerToast({ message: error, variant: TOAST_VARIANTS.ERROR });
      navigation.goBack();
      return;
    }

    setExams(data);
  };

  useEffect(() => {
    getAllUserExams();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
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
    </View>
  );
};

export default Exams;
