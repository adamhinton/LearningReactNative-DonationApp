import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

type Props = {
  title: string;
  // isDisabled default false
};

const Badge = (props: Props) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={e => {
          // set to width of title
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={style.title}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default Badge;
