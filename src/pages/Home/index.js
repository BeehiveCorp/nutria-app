import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import { ThemeContext, UserContext } from '../../contexts';
import { DependentService } from '../../services';

import { Box, UserHeader, DependentCard } from '../../components';

import getStyles from './styles';

const Home = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  const [dependents, setDependents] = useState([]);

  const onAddDependent = () => {
    navigation.navigate('NewDependent');
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

  useFocusEffect(
    React.useCallback(() => {
      fetchDependents();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
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
      </ScrollView>
    </View>
  );
};

export default Home;
