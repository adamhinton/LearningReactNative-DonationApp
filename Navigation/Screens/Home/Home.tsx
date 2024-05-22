/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Header from '../../../components/Header/Header';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <Text>Hello World!!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
