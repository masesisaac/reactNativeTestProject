import {ButtonProps, IconProps, TextProps} from 'react-native-elements';

const Colors = {
  primary: '#E27C7C',
  secondary: '#486279',
  grey5: '#FAF8F6',
};

const theme = {
  colors: Colors,
  Button: {
    buttonStyle: {
      width: '100%',
      height: 55,
      justifyContent: 'center',
    },
    titleStyle: {
      alignSelf: 'center',
    },
    activeOpacity: 0.8,
  } as ButtonProps,
  Icon: {
    color: Colors.secondary,
  } as IconProps,
  Text: {
    style: {
      color: Colors.secondary,
    },
  } as TextProps,
};

export default theme;
