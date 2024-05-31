import React from 'react';
import {Image, Pressable, View} from 'react-native';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

type Props = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress?: Function;
  donationItemId: number;
};

const SingleDonationItem = (props: Props) => {
  const {uri, badgeTitle, donationTitle, price, donationItemId} = props;

  const onPress = props.onPress
    ? props.onPress
    : // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (donationItemId2: number) => {};

  return (
    <Pressable
      onPress={() => {
        onPress(onPress(donationItemId));
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image src={uri} style={style.image} resizeMode="contain" />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={donationTitle}
          type={3}
          color="#156CF7"
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={`$${String(price.toFixed(2))}`}
            type={3}
            color="#156CF7"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
