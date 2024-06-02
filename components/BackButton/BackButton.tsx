import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable} from 'react-native';

type Props = {
  onPress: Function;
};

const BackButton = (props: Props) => {
  return (
    <Pressable onPress={() => props.onPress()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
