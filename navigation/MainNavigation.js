import { View, Text } from 'react-native'
import React from 'react'
import MainScreen from '../screens/MainScreen'
import DetailScreen from'../screens/DetailScreen'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function MainNavigation() {
  return (
    <Stack.Navigator
     initialRouteName='MainScreen'>
        <Stack.Screen name='MainScreen' component={MainScreen}/>
        <Stack.Screen name='DetailScreen' component={DetailScreen}/>
    </Stack.Navigator>
  )
}