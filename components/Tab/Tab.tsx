import React from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

type Props = {
  title: string;
  // isDisabled default false
  onPress?: Function;
  isInactive?: boolean;
};

const Tab = (props: Props) => {
  const {isInactive, onPress} = props;

  return (
    <Pressable
      disabled={isInactive}
      style={[style.button, isDisabled && style.disabled]}
      onPress={() => {
        onPress && onPress();
      }}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

export default Tab;
