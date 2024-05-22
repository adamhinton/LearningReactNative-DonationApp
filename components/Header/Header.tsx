import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

type Props = {
  // title empty by default
  title?: string;
};

const Header = (props: Props) => {
  const {title} = props;

  return (
    <View>
      {/* title empty by default */}
      <Text style={style.title1}>{title ?? 'fdsfas'}</Text>
    </View>
  );
};

export default Header;
