import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

type Props = {
  label: string;
};

const Input = (props: Props) => {
  const {label} = props;

  const [value, setValue] = useState('');

  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={value} onChangeText={val => setValue(val)} />
    </View>
  );
};

export default Input;
