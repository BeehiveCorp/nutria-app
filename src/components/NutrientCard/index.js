import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const NutrientCard = ({ symbol, name, description, result, onPress }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ flex: 1 }}>
      <Box horizontal spaceBetween style={styles.container}>
        <Box horizontal alignItemsCenter style={styles.nutrientInfoContainer}>
          <Box justifyContentCenter alignItemsCenter style={styles.symbolContainer}>
            <Text style={styles.symbol}>{symbol}</Text>
          </Box>

          <Box style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>
              {description}
            </Text>
          </Box>
        </Box>

        <Box justifyContentCenter alignItemsCenter>
          <Box
            justifyContentCenter
            alignItemsCenter
            style={styles.resultContainer(result)}
          >
            <Text style={styles.result(result)}>{result}</Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default NutrientCard;
