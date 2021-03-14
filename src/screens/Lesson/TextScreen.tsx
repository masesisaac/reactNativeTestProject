import * as React from 'react';
import {useTheme, Button} from 'react-native-elements';
import {View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/core';

import Title from '../../components/Title';
import Body from '../../components/Body';
import Spacer from '../../components/Spacer';

import {RouteParams} from './types';

function TextScreen() {
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
        {data.image?.fields.file.url && (
          <>
            <Spacer size="10%" />
            <Title>{data.image?.fields.title}</Title>
            <Image
              source={{
                uri: `http:${data.image?.fields.file.url}`,
              }}
              style={styles.image}
            />
          </>
        )}
        {data.title && (
          <>
            <Spacer size="10%" />
            <Title>{data.title}</Title>
          </>
        )}
        {data.body && (
          <>
            <Spacer size="10%" />
            <Body>{data.body}</Body>
          </>
        )}
      </View>
      <View>
        <Button title={data.buttonText} onPress={onNext} />
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

export default TextScreen;
