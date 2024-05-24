import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

type Props = {
  // title empty by default
  title?: string;
  // type defaults to 1
  type: number;
  color?: string;
};

const Header = (props: Props) => {
  const {title} = props;

  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;

      default:
        return style.title1;
    }
  };

  return (
    <View>
      {/* title empty by default */}
      <Text style={[styleToApply(), props.color ? {color: props.color} : null]}>
        {title ?? ''}
      </Text>
    </View>
  );
};

export default Header;
