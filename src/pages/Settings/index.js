import React, { useContext, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { THEME } from '../../utils/constants';
import { ThemeContext } from '../../contexts';
import { BottomSheet, Box, Input, Option } from '../../components';

import getStyles from './styles';

const Settings = ({ navigation }) => {
  const { theme, themeCode, toggleTheme } = useContext(ThemeContext);

  const styles = getStyles();

  const themeBottomSheetRef = useRef(null);

  const onOptionPress = () => {
    toggleTheme();
    themeBottomSheetRef?.current?.close();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Box style={styles.header} horizontal alignItemsCenter>
          <TouchableOpacity onPress={navigation.goBack}>
            <Feather name="arrow-left" size={26} color={theme.title} />
          </TouchableOpacity>

          <Text style={styles.title}>Configurações</Text>
        </Box>

        <Box style={{ marginTop: 32 }}>
          <Input
            label="Tema"
            value={themeCode === THEME.DARK ? 'Escuro' : 'Claro'}
            onPress={() => themeBottomSheetRef?.current?.collapse()}
            onIconPress={() => themeBottomSheetRef?.current?.collapse()}
            icon="chevron-up"
          />
        </Box>
      </ScrollView>

      <BottomSheet
        ref={themeBottomSheetRef}
        snapPoints={['32%']}
        title="Escolha um tema"
        description="Toque para selecionar"
      >
        <Option
          value="Escuro"
          onPress={() => themeCode === THEME.LIGHT && onOptionPress()}
          isSelected={themeCode === THEME.DARK}
          style={{ marginBottom: 12 }}
        />

        <Option
          value="Claro"
          onPress={() => themeCode === THEME.DARK && onOptionPress()}
          isSelected={themeCode === THEME.LIGHT}
        />
      </BottomSheet>
    </View>
  );
};

export default Settings;
