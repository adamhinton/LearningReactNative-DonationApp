import React, {useRef, useState} from 'react';
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

  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  return (
    <Pressable
      disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab]}
      onPress={() => {
        onPress && onPress();
      }}>
      <Text
        ref={textRef}
        style={[style.title, isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default Tab;
