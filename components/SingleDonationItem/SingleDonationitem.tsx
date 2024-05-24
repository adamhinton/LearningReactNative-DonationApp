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
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image src={uri} style={style.image} resizeMode="contain" />
      </View>
      <View style={style.donationInformation}>
        <Header title={donationTitle} type={3} />
        <View style={style.price}>
          <Header
            title={`$${String(price.toFixed(2))}`}
            type={3}
            color="#156CF7"
          />
        </View>
      </View>
    </View>
  );
};

export default SingleDonationItem;
