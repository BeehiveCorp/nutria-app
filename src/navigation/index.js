import { useContext } from 'react';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext, UserContext } from '../contexts';

import { Login, Home, Profile } from '../pages';

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

function GlobalNavigation() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const isUserSigned = user?.id;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isUserSigned ? (
            <>
              <Stack.Screen name="Explore" component={Explore} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
            </>
          )}
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
