import React from 'react';
import {Pressable, Text} from 'react-native';

type Props = {
  title: string;
  // isDisabled default false
  isDisabled?: boolean;
};

const Button = (props: Props) => {
  const {isDisabled} = props;

  return (
    <Pressable disabled={isDisabled}>
      <Text>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
