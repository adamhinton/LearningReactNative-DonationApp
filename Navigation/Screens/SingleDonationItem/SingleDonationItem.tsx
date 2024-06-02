/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {SafeAreaView, ScrollView} from 'react-native';
import globalStyle from '../../../assets/styles/GlobalStyle';
import BackButton from '../../../components/BackButton/BackButton';
import style from './style';

const SingleDonationItem = ({navigation}: {navigation: unknown}) => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        {/* @ts-ignore */}
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
