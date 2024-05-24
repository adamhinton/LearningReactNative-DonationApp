import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import Header from '../../../components/Header/Header';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.firstName);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Nata'} type={1} />
    </SafeAreaView>
  );
};

export default Home;
