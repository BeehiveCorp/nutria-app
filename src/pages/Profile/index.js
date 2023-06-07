import React, { useContext, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';

import chroma from 'chroma-js';

import { Image } from 'expo-image';

import { Feather } from '@expo/vector-icons';

import { ThemeContext, UserContext } from '../../contexts';
import { getFormattedBase64, triggerToast } from '../../utils/global';
import { TOAST_VARIANTS } from '../../utils/constants';

import { BottomSheet, Box, Option } from '../../components';

import getStyles from './styles';

const Profile = ({ navigation }) => {
  const { user, logout } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const styles = getStyles();

  const logoutBottomSheetRef = useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
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
            onPress={() => navigation.navigate('Exams', { userId: user.id })}
            renderIcon={() => (
              <Feather name="file-text" color={theme.text} size={20} />
            )}
          />

          <Option
            value="Conta"
            containerStyle={styles.option}
            style={{ marginBottom: 12 }}
            onPress={() =>
              triggerToast({
                variant: TOAST_VARIANTS.INFO,
                message: 'Em desenvolvimento',
                description: 'Essa funcionalidade ainda está em desenvolvimento',
              })
            }
            renderIcon={() => <Feather name="user" color={theme.text} size={20} />}
          />

          <Option
            value="Configurações"
            containerStyle={styles.option}
            style={{ marginBottom: 12 }}
            onPress={() => navigation.navigate('Settings')}
            renderIcon={() => (
              <Feather name="settings" color={theme.text} size={20} />
            )}
          />

          <Option
            value="Sair"
            containerStyle={styles.logoutOption}
            titleStyle={{ color: chroma(theme.error).alpha(0.5).hex() }}
            onPress={() => logoutBottomSheetRef?.current?.collapse()}
            renderIcon={() => (
              <Feather
                name="log-out"
                color={chroma(theme.error).alpha(0.5).hex()}
                size={20}
              />
            )}
            hideChevronIcon
          />
        </Box>

        <Text style={styles.version}>Versão 1.0.0</Text>
      </ScrollView>

      <BottomSheet
        ref={logoutBottomSheetRef}
        snapPoints={['25%']}
        bottomInset={140}
        title="Tem certeza que deseja sair?"
        description="Você será redirecionado(a) para o login"
      >
        <Option value="Sim, tenho certeza" onPress={logout} />
      </BottomSheet>
    </View>
  );
};

export default Profile;
