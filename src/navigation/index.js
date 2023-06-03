import { useContext } from 'react';

import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Login, Home, Profile } from '../pages';

import { ThemeContext } from '../contexts';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Explore() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function GlobalNavigation() {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default function () {
  return (
    <SafeAreaProvider>
      <GlobalNavigation />
    </SafeAreaProvider>
  );
}
