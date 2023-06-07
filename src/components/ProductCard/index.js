import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import moment from 'moment';

import { Feather } from '@expo/vector-icons';

import { Image } from 'expo-image';

import { getFormattedBase64 } from '../../utils/global';
import { ThemeContext } from '../../contexts';

import Box from '../Box';

import getStyles from './styles';

const ProductCard = ({ product, onPress }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles();

  const { id, store_id, name, price, stock, picture, validate_date } = product;

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
      <Box alignItemsCenter>
        <Box justifyContentCenter alignItemsCenter style={styles.pictureContainer}>
          {picture ? (
            <Image
              source={{ uri: getFormattedBase64(picture) }}
              style={styles.picture}
            />
          ) : (
            <Feather name="shopping-cart" size={24} color={theme.text} />
          )}
        </Box>

        <Box style={{ marginTop: 12 }}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.validate}>
            {moment(validate_date).format('DD/MM/YYYY')}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ProductCard;
