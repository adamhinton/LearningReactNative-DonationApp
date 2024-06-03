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

  const categoryInformation = route.params.categoryInformation;

  console.log('route:', route.params);
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
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
