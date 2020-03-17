/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Page1 from './komponen/Page1';
import Page2 from './komponen/Page2';
import Page3 from './komponen/Page3';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = (styles = bootstrapStyleSheet.create());

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Page1">
        <Stack.Screen name="page1" component={Page1} />
        <Stack.Screen name="page2" component={Page2} />
        <Stack.Screen name="page3" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
