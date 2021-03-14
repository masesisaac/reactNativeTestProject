import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextProps} from 'react-native-elements';

interface TitleProps extends TextProps {
  children: string;
}

function Title({children}: TitleProps) {
  return (
    <Text h2 style={styles.title}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default Title;
