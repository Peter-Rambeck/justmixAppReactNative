import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import MainStack from './src/navigation/MainStack';
import {CartContextProvider} from './src/utils/context';

export default function App() {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <StatusBar barStyle="light-content" />
        <MainStack />
      </CartContextProvider>
    </NavigationContainer>
  );
}
