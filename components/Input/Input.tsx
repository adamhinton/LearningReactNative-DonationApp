import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import style from './style';

type Props = {
  label: string;
  placeholder?: string;
};

const Input = (props: Props) => {
  const {label, placeholder} = props;

  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : null}
        style={style.input}
        value={value}
        onChangeText={val => setValue(val)}
      />
    </View>
  );
};

export default Input;
