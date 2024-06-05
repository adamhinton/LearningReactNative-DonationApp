import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Input from '../../../components/Input/Input';
import style from './style';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';

const Registration = () => {
  const [email, setEmail] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  console.log('email:', email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
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
          <Button title={'Login'} />
        </View>
        {/* Will build out this link when we have reg page */}
        <Pressable style={style.registrationButton}>
          <Header color="#156CF7" type={3} title="Don't have an account?" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
