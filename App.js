import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import MainStack from './src/stacks/mainStack';


export default function e_commerceApp() {
  return (
    <NavigationContainer>
        <StatusBar style="dark" />
        <MainStack/>
    </NavigationContainer>
   
  );
}


