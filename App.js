import { useState, useCallback } from 'react';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ThemeProvider } from './src/contexts/ThemeContext';
import { UserProvider } from './src/contexts/UserContext';
import GlobalNavigation from './src/navigation';
import { View } from 'react-native';

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
        </UserProvider>
      </ThemeProvider>
    </View>
  );
}
