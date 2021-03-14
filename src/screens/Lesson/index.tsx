import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';
import {Icon, useTheme} from 'react-native-elements';

import TextScreen from './TextScreen';
import FeedbackScreen from './FeedbackScreen';

import lessonData from '../../../flows/1_lesson_introduction.json';

const LessonStack = createStackNavigator();

function Lesson() {
  const parentNavigation = useNavigation();
  const {theme} = useTheme();

  const generateLessonScreens = React.useCallback(() => {
    const screens = lessonData.data.fields.screens;
    return screens.map((screen, index) => {
      if (screen.type === 'engTakeHomeTextScreen') {
        return (
          <LessonStack.Screen
            key={screen.id}
            name={screen.id}
            component={TextScreen}
            initialParams={{
              data: screen.fields,
              nextScreen: screens[index + 1] ? screens[index + 1].id : null,
            }}
          />
        );
      } else {
        return (
          <LessonStack.Screen
            key={screen.id}
            name={screen.id}
            component={FeedbackScreen}
            initialParams={{
              data: screen.fields,
              nextScreen: screens[index + 1] ? screens[index + 1].id : null,
            }}
          />
        );
      }
    });
  }, []);

  const handleCloseLesson = () => {
    parentNavigation.navigate('Home');
  };

  return (
    <LessonStack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: theme.colors?.grey5,
          shadowColor: theme.colors?.greyOutline,
        },
        headerRightContainerStyle: {
          marginRight: 20,
        },
        headerRight: () => (
          <Icon
            name="close"
            type="material-community"
            size={25}
            onPress={handleCloseLesson}
          />
        ),
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerLeft: ({}) => (
          <Icon
            name="arrow-left"
            type="material-community"
            size={25}
            onPress={() => navigation.goBack()}
          />
        ),
        headerTitle: '',
      })}>
      {generateLessonScreens()}
    </LessonStack.Navigator>
  );
}

export default Lesson;
