import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { SettingsScreen } from '../../features/settings/screens/setting.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'screen',
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
