import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Masks } from 'react-native-mask-input';

import { Feather } from '@expo/vector-icons';

import ExamService from '../../services/ExamService';
import { ThemeContext } from '../../contexts';
import { triggerToast } from '../../utils/global';
import { TOAST_VARIANTS } from '../../utils/constants';
import { Box, Button, Input } from '../../components';

import getStyles from './styles';

const Stores = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={styles.header} horizontal alignItemsCenter>
          <TouchableOpacity onPress={navigation.goBack}>
            <Feather name="arrow-left" size={26} color={theme.title} />
          </TouchableOpacity>

          <Input
            value={query}
            onChangeText={setQuery}
            containerStyle={{ marginLeft: 8, flex: 1 }}
            placeholder="Pesquise por produto ou comércio"
            icon="search"
          />
        </Box>

        <Box style={{ marginTop: 32 }}>
          <Text style={styles.label}>Em destaque</Text>
          <Text style={styles.label}>Perto de você</Text>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Stores;
