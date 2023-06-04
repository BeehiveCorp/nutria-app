import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext, UserContext } from '../../../contexts';
import { Box, Button, Input, NutriaLogo } from '../../../components';

import getStyles from './styles';

const Step3 = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return <View style={styles.container}></View>;
};

export default Step3;
