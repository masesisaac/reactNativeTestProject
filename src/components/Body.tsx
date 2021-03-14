import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextProps} from 'react-native-elements';

interface BodyProps extends TextProps {
  children: string;
}

function Body({children}: BodyProps) {
  return (
    <Text h4 style={styles.body} h4Style={styles.sizing}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  body: {
    fontWeight: 'normal',
    lineHeight: 28,
  },
  sizing: {
    fontSize: 20,
  },
});

export default Body;
