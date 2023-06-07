import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'expo-image';

import { ThemeContext } from '../../contexts';

import { Box } from '../../components';

import { getFormattedBase64 } from '../../utils/global';
import getStyles from './styles';

const StoresMap = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);

  const stores = route.params?.stores;

  const styles = getStyles();

  return (
    <Box style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.57413563295003,
          longitude: -46.62322788703562,
          latitudeDelta: 0.0052,
          longitudeDelta: 0.001,
        }}
        showsPointsOfInterest={false}
      >
        <Marker
          coordinate={{
            latitude: -23.57413563295003,
            longitude: -46.62322788703562,
          }}
          title="Você"
        />

        {stores.map((store) => (
          <Marker
            key={store.id}
            coordinate={{
              latitude: store.latitude,
              longitude: store.longitude,
            }}
            title={store.name}
          >
            <Box style={styles.marker}>
              <Box
                justifyContentCenter
                alignItemsCenter
                style={styles.avatarContainer}
              >
                {store.avatar ? (
                  <Image
                    source={{ uri: getFormattedBase64(store.avatar) }}
                    style={styles.avatar}
                  />
                ) : (
                  <Feather name="shopping-cart" size={24} color={theme.text} />
                )}
              </Box>

              <Text numberOfLines={1} style={styles.name}>
                {store.name}
              </Text>
            </Box>
          </Marker>
        ))}
      </MapView>

      <Box justifyContentCenter alignItemsCenter style={styles.backContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color={theme.title} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default StoresMap;
