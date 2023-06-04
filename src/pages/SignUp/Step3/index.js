import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import { UserContext } from '../../../contexts';
import { Box, Button, Input, NutriaLogo } from '../../../components';

import getStyles from './styles';

const Step3 = ({ navigation }) => {
  const styles = getStyles();

  return <View style={styles.container}></View>;
};

export default Step3;
