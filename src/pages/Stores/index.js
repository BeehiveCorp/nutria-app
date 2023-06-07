import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { triggerToast } from '../../utils/global';
import { TOAST_VARIANTS } from '../../utils/constants';
import { ProductService, StoreService } from '../../services';
import { ThemeContext } from '../../contexts';

import { Box, Input, ProductCard, StoreCard } from '../../components';

import getStyles from './styles';

const Stores = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  const missingNutrients = route.params?.missingNutrients;

  const [query, setQuery] = useState('');

  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  const fetchProducts = async () => {
    const missingNutrientIds = missingNutrients.map(({ id }) => id);

    const { data, error } = await ProductService.getAll({
      missingNutrientIds,
    });

    if (error) {
      triggerToast({ message: error, variant: TOAST_VARIANTS.ERROR });
      return;
    }

    setProducts(data);
  };

  const fetchStores = async () => {
    const { data, error } = await StoreService.getAll();

    if (error) {
      triggerToast({ message: error, variant: TOAST_VARIANTS.ERROR });
      return;
    }

    setStores(data);
  };

  const onMapLinkPress = () => {
    navigation.navigate('StoresMap', {
      stores,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchProducts();
      fetchStores();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          style={{ ...styles.header, ...styles.boundaries }}
          horizontal
          alignItemsCenter
        >
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

        {products.length > 0 && (
          <Box style={{ marginTop: 32 }}>
            <Text
              style={{ ...styles.label, ...styles.boundaries, marginBottom: 16 }}
            >
              Em destaque
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.carousel}
            >
              {products.map((product, idx) => (
                <Box key={product.id} style={{ marginLeft: idx > 0 ? 8 : 0 }}>
                  <ProductCard product={product} />
                </Box>
              ))}
            </ScrollView>
          </Box>
        )}

        {stores.length > 0 && (
          <Box style={{ ...styles.boundaries, marginTop: 32 }}>
            <Box
              horizontal
              alignItemsCenter
              spaceBetween
              style={{ marginBottom: 16 }}
            >
              <Text style={{ ...styles.label }}>Perto de você</Text>

              <TouchableOpacity activeOpacity={0.8} onPress={onMapLinkPress}>
                <Text style={styles.link}>Ver no mapa</Text>
              </TouchableOpacity>
            </Box>

            {stores.map((store) => (
              <Box key={store.id} style={{ flex: 1, marginBottom: 8 }}>
                <StoreCard store={store} key={store.id} />
              </Box>
            ))}
          </Box>
        )}
      </ScrollView>
    </View>
  );
};

export default Stores;
