import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ThemeContext, UserContext } from '../../contexts';

import { Box, UserHeader } from '../../components';

import getStyles from './styles';

const Home = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  const [dependents, setDependents] = useState([]);

  const onAddDependent = () => {
    navigation.navigate('NewDependent');
  };

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

          <ScrollView horizontal contentContainerStyle={styles.carousel}>
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
