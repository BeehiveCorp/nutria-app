import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Login, Home, Profile } from '../pages';

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

export function GlobalNavigation() {
  console.log('GlobalNavigation');

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
