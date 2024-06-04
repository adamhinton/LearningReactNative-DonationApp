import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Input from '../../../components/Input/Input';
import style from './style';
import Header from '../../../components/Header/Header';

const Login = () => {
  const [email, setEmail] = useState('');

  console.log('email:', email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Header type={1} title="Welcome Back" />
        <Input
          label={'Email'}
          placeholder="Enter your email"
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          secureTextEntry={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
