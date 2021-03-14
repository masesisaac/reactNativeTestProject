import * as React from 'react';
import {useTheme, Button} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/core';

import FeedbackCard from '../../components/FeedbackCard';
import Body from '../../components/Body';
import Spacer from '../../components/Spacer';

import {RouteParams} from './types';

function FeedbackScreen() {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();

  const {nextScreen, data} = route.params;

  const onNext = () => {
    if (nextScreen) {
      navigation.navigate(nextScreen);
    } else {
      // no next screen, close the lesson
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={[styles.container, {backgroundColor: theme.colors?.grey5}]}>
      <View>
        {/* <Spacer size="10%" />
        <Title>Feedback.</Title> */}
        <Body>{data.body || ''}</Body>
        <Spacer size="10%" />
        <FeedbackCard
          title={data.feedbackTitle || ''}
          description="Your feedback will help us personalise your Sleep Program."
        />
      </View>
      <View>
        <Button title="Done" onPress={onNext} />
        <Spacer size="10%" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default FeedbackScreen;
