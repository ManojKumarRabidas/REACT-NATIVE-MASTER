import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import TimeScreen from '../screens/TimeScreen';

export type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Time: { updateTime: (time: string) => void };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Time" component={TimeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
