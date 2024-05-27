import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

type Props = {
  title: string;
  // isDisabled default false
  onPress: Function;
  isInactive?: boolean;
  tabId: number;
};

const Tab = (props: Props) => {
  const {isInactive, onPress, tabId} = props;

  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={() => {
        onPress(tabId);
      }}>
      <Text
        onTextLayout={e => {
          // set to width of title
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default Tab;
