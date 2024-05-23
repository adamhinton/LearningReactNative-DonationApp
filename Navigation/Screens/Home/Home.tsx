/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('You just pressed me');
        }}
      />
      <Button title={'Donate'} isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
