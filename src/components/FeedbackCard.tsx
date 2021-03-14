import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, useTheme} from 'react-native-elements';

import IconButton from './IconButton';

interface FeedbackCardProps {
  title: string;
  description: string;
}

function FeedbackCard({title, description}: FeedbackCardProps) {
  const {theme} = useTheme();
  const [rating, setRating] = useState('');

  return (
    <View style={[styles.container, {backgroundColor: theme.colors?.white}]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonsContainer}>
        <IconButton
          size={30}
          iconName="thumb-up-outline"
          onPress={() => setRating('up')}
          active={rating === 'up'}
        />
        <IconButton
          size={30}
          iconName="thumb-down-outline"
          onPress={() => setRating('down')}
          active={rating === 'down'}
        />
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    width: '60%',
  },
  iconContainer: {
    borderWidth: 2,
  },
});

export default FeedbackCard;
