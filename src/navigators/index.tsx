import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { DetailScreen, HomeScreen } from '../screens';
import { NavigatorMap } from './NavigatorMap';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigatorMap.Home} component={HomeScreen} />
      <Stack.Screen name={NavigatorMap.Detail} component={DetailScreen} />
    </Stack.Navigator>
  );
};
