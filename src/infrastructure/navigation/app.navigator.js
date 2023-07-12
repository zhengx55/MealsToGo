import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Setting from '../../features/restaurants/screen/setting.screen';
import Map from '../../features/restaurants/screen/map.screen';
import RestaurantsNavigator from './restaurants.navigator';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Setting: 'md-settings',
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
  };
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNavigator;
