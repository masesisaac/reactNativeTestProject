import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, useTheme} from 'react-native-elements';

interface IconButtonProps {
  onPress: () => void;
  size?: number;
  iconName: string;
  iconType?: string;
  active?: boolean;
}

function IconButton({
  onPress,
  size = 30,
  iconName,
  iconType = 'material-community',
  active = false,
}: IconButtonProps) {
  const {theme} = useTheme();

  return (
    <Icon
      // reverse
      name={iconName}
      type={iconType}
      color={active ? theme.colors?.white : theme.colors?.secondary}
      containerStyle={[
        styles.iconContainer,
        {
          padding: size / 2,
          borderColor: theme.colors?.secondary,
          backgroundColor: active
            ? theme.colors?.secondary
            : theme.colors?.white,
        },
      ]}
      size={size}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 2,
    borderRadius: 50,
  },
});

export default IconButton;
