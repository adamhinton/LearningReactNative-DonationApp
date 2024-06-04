import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Input from '../../../components/Input/Input';
import style from './style';

const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Input label={'Email'} placeholder="Enter your email" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
