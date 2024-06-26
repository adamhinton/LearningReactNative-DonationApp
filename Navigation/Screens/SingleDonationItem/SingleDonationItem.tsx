import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../../assets/styles/GlobalStyle';
import BackButton from '../../../components/BackButton/BackButton';
import style from './style';
import {DonationItem} from '../../../redux/reducers/Donations';
import Badge from '../../../components/Badge/Badge';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';

const SingleDonationItem = ({
  navigation,
  route,
}: {
  navigation: unknown;
  route: unknown;
}) => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );

  // @ts-ignore
  const categoryInformation = route.params.categoryInformation;

  // @ts-ignore
  // console.log('route:', route.params);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        {/* @ts-ignore */}
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          // type casting because we know DII won't be an empty object here
          source={{uri: (donationItemInformation as DonationItem).image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        {/* @ts-ignore */}
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description} {/* @ts-ignore */}
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
