import { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeContext, UserContext, SignUpProvider } from '../contexts';

import {
  Login,
  Home,
  Profile,
  SignUpStep1,
  SignUpStep2,
  SignUpStep3,
} from '../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Explore() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
}

function NonAuthNavigation() {
  return (
    <SignUpProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpStep1" component={SignUpStep1} />
        <Stack.Screen name="SignUpStep2" component={SignUpStep2} />
        <Stack.Screen name="SignUpStep3" component={SignUpStep3} />
      </Stack.Navigator>
    </SignUpProvider>
  );
}

function GlobalNavigation() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const isUserSigned = user?.id;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <NavigationContainer>
        {isUserSigned ? <AuthNavigation /> : <NonAuthNavigation />}
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
