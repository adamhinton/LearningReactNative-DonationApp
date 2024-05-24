import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Header from '../../../components/Header/Header';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);

  const {firstName, lastName} = user;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={`${firstName} ${lastName}`} type={1} />
    </SafeAreaView>
  );
};

export default Home;
