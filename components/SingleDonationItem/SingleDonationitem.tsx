import React from 'react';
import {Image, View} from 'react-native';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

type Props = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
};

const SingleDonationItem = (props: Props) => {
  const {uri, badgeTitle, donationTitle, price} = props;

  return (
    <View>
      <View>
        <Badge title={badgeTitle} />
        <Image src={uri} style={style.image} />
      </View>
      <Header title={donationTitle} type={3} />
    </View>
  );
};

export default SingleDonationItem;
