import * as React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'react-native-elements';

import HomeScreen from './screens/Home';
import Lesson from './screens/Lesson';

import theme from './theme';

const MainStack = createStackNavigator();

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.grey5} />
      <MainStack.Navigator headerMode="none">
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Lesson" component={Lesson} />
      </MainStack.Navigator>
    </ThemeProvider>
  );
}

export default Main;
