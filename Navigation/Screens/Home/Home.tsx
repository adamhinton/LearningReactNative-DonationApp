/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import Tab from '../../../components/Tab/Tab';
import Badge from '../../../components/Badge/Badge';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />

      <Tab title={'Highlight'} isInactive={true} />
      <Badge title={'Environment'} />
    </SafeAreaView>
  );
};

export default Home;
