import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import style from './style';
import {scaleFontSize} from '../../assets/styles/scaling';

type Props = {
  onSearch: (value: string) => void;
};

const Search = (props: Props) => {
  const {onSearch} = props;

  const textInputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState('');

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch(value);
  };

  const handleFocus = () => {
    textInputRef.current!.focus();
  };

  return (
    <Pressable style={style.searchInputContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        onPress={handleFocus}
        style={style.searchInput}
        value={search}
        onChangeText={val => handleSearch(val)}
      />
    </Pressable>
  );
};

export default Search;
