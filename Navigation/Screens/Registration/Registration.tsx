/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Input from '../../../components/Input/Input';
import style from './style';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import BackButton from '../../../components/BackButton/BackButton';
import {HackyNavigation} from '../../../App';

const Registration = ({navigation}: {navigation: HackyNavigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  console.log('email:', email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBotton24}>
          <Header type={1} title="Hello and Welcome !" />
        </View>

        <View style={globalStyle.marginBotton24}>
          <Input
            label={'First & Last Name'}
            placeholder="Enter your full name"
            onChangeText={value => setFullName(value)}
            keyboardType="default"
            secureTextEntry={false}
          />
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
          <Button title={'Register'} />
        </View>
        {/* Will build out this link when we have reg page */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
