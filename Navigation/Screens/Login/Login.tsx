/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Input from '../../../components/Input/Input';
import style from './style';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import {Routes} from '../../Routes';

const Login = ({navigation}: {navigation: unknown}) => {
  console.log('navigation:', navigation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('email:', email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBotton24}>
          <Header type={1} title="Welcome Back" />
        </View>
        <View style={globalStyle.marginBotton24}>
          <Input
            label={'Email'}
            placeholder="Enter your email"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            secureTextEntry={false}
          />
        </View>
        <View style={globalStyle.marginBotton24}>
          <Input
            label={'Password'}
            placeholder="******"
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        <View style={globalStyle.marginBotton24}>
          <Button title={'Login'} />
        </View>
        {/* Will build out this link when we have reg page */}
        <Pressable
          style={style.registrationButton}
          onPress={() => (navigation as any).navigate(Routes.Registration)}>
          <Header color="#156CF7" type={3} title="Don't have an account?" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
