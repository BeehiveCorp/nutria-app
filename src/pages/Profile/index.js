import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Image } from 'expo-image';

import { Feather } from '@expo/vector-icons';

import { ThemeContext, UserContext } from '../../contexts';
import { getFormattedBase64 } from '../../utils/global';

import { Box, Option } from '../../components';

import getStyles from './styles';

const Profile = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Box alignItemsCenter>
          <Box justifyContentCenter alignItemsCenter style={styles.avatarContainer}>
            {user?.avatar ? (
              <Image
                source={{ uri: getFormattedBase64(user.avatar) }}
                style={styles.avatar}
              />
            ) : (
              <Feather name="user" size={24} color={theme.text} />
            )}
          </Box>

          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </Box>

        <Box style={styles.options}>
          <Option
            value="Meus exames"
            containerStyle={styles.option}
            style={{ marginBottom: 12 }}
            renderIcon={() => (
              <Feather name="file-text" color={theme.text} size={20} />
            )}
          />

          <Option
            value="Conta"
            containerStyle={styles.option}
            style={{ marginBottom: 12 }}
            renderIcon={() => <Feather name="user" color={theme.text} size={20} />}
          />

          <Option
            value="Configurações"
            containerStyle={styles.option}
            renderIcon={() => (
              <Feather name="settings" color={theme.text} size={20} />
            )}
          />
        </Box>

        <Text style={styles.version}>Versão 1.0.0</Text>
      </ScrollView>
    </View>
  );
};

export default Profile;
