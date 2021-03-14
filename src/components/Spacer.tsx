import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  size: number | string;
}

function Spacer({size}: SpacerProps) {
  return <View style={{marginTop: size}} />;
}

export default Spacer;
