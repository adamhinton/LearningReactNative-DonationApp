import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {ScrollView, Text, View} from 'react-native';
import style from './style';
import Header from '../../../components/Header/Header';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const {firstName, lastName} = user;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <Text style={style.headerIntroText}>Hello, </Text>
          <View style={style.username} />
          <Header type={1} title={`${firstName} ${lastName[0]}. 👋`} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
