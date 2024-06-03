import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import globalStyle from '../../assets/styles/GlobalStyle';

const Input = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input />
        <Text>fdasfsa</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Input;
