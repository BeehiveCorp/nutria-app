import { useState, useCallback } from 'react';
import { View } from 'react-native';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import * as SplashScreen from 'expo-splash-screen';

import Toast from 'react-native-toast-message';

import { Toast as TheToast } from './src/components';
import { ThemeProvider, UserProvider } from './src/contexts';
import GlobalNavigation from './src/navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const onGetStoredUser = () => {
    setAppIsReady(true);
  };

  const toastConfig = {
    success: ({ props }) => <TheToast variant="success" {...props} />,
    error: ({ props }) => <TheToast variant="error" {...props} />,
    warning: ({ props }) => <TheToast variant="warning" {...props} />,
    info: ({ props }) => <TheToast variant="info" {...props} />,
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 2000);
    }
  }, [appIsReady, fontsLoaded]);

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider>
        <UserProvider onGetStoredUser={onGetStoredUser}>
          <GlobalNavigation />
          <Toast config={toastConfig} topOffset={64} />
        </UserProvider>
      </ThemeProvider>
    </View>
  );
}
