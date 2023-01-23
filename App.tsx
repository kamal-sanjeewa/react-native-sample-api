/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Button, View} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppRoute from './src/routes/Router';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Drawer = createDrawerNavigator();
const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppRoute />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
