import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Setting: 'md-settings',
};

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screen/restaurants.screen';

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={RestaurantsScreen} />
          <Tab.Screen name="Setting" component={RestaurantsScreen} />
        </Tab.Navigator>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
}
