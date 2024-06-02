/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );
  console.log('donationItemInformation:', donationItemInformation);
  return null;
};

export default SingleDonationItem;
