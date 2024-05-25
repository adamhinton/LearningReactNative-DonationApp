import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Header from '../../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Pressable, Text} from 'react-native';
import {updateFirstName} from '../../../redux/reducers/User';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const {firstName, lastName} = user;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]} />
  );
};

export default Home;
