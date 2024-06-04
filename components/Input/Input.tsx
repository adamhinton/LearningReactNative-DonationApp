import React, {useState} from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import style from './style';

type Props = {
  label: string;
  placeholder?: string;
  onChangeText?: (val: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

const Input = (props: Props) => {
  const {label, placeholder, onChangeText, keyboardType, secureTextEntry} =
    props;

  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : undefined}
        style={style.input}
        value={value}
        onChangeText={val => {
          setValue(val);
          onChangeText && onChangeText(val);
        }}
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
      />
    </View>
  );
};

export default Input;
