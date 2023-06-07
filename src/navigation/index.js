import { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';

import { ThemeContext, UserContext, SignUpProvider } from '../contexts';

import { BOTTOM_TABS_PAGES, THEME } from '../utils/constants';

import {
  Login,
  Home,
  Profile,
  SignUpStep1,
  SignUpStep2,
  SignUpStep3,
  SignUpStep4,
  Settings,
  Exams,
  ExamDetails,
} from '../pages';

import { TabBarItem } from './components';

import getStyles from './styles';
import { Box } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Explore() {
  const { themeCode } = useContext(ThemeContext);
  const styles = getStyles();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
        tabBarBackground: () => (
          <Box style={styles.background}>
            <BlurView
              tint={themeCode === THEME.DARK ? 'dark' : 'light'}
              intensity={40}
              style={styles.blur}
            />
          </Box>
        ),
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem focused={focused} pageCode={BOTTOM_TABS_PAGES.HOME} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem focused={focused} pageCode={BOTTOM_TABS_PAGES.PROFILE} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Exams" component={Exams} />
      <Stack.Screen name="ExamDetails" component={ExamDetails} />
    </Stack.Navigator>
  );
}

function NonAuthNavigation() {
  return (
    <SignUpProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpStep1" component={SignUpStep1} />
        <Stack.Screen
          name="SignUpStep2"
          component={SignUpStep2}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen
          name="SignUpStep3"
          component={SignUpStep3}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen
          name="SignUpStep4"
          component={SignUpStep4}
          options={{ animationEnabled: false }}
        />
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <GlobalNavigation />
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
