import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable, TextInput} from 'react-native';
import style from './style';

const Search = () => {
  return (
    <Pressable style={style.searchInputContainer}>
      <FontAwesomeIcon icon={faSearch} />
      <TextInput style={style.searchInput} />
    </Pressable>
  );
};

export default Search;
