import React from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

type Props = {
  title: string;
  // isDisabled default false
  isDisabled?: boolean;
  onPress?: Function;
};

const Button = (props: Props) => {
  const {isDisabled, onPress} = props;

  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button, isDisabled && style.disabled]}
      onPress={() => {
        onPress && onPress();
      }}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
