import * as React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, StyleSheet} from 'react-native';
import {Button, useTheme} from 'react-native-elements';

function HomeScreen() {
  const navigation = useNavigation();
  const {theme} = useTheme();

  const goToLesson = () => {
    navigation.navigate('Lesson');
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.colors?.grey5}]}>
      <Button
        buttonStyle={styles.buttonStyle}
        title="Get Started"
        onPress={goToLesson}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 250,
  },
});

export default HomeScreen;
