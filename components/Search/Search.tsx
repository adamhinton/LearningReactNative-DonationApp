import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef} from 'react';
import {Pressable, TextInput} from 'react-native';
import style from './style';

const Search = () => {
  const textInputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    textInputRef.current!.focus();
  };

  return (
    <Pressable style={style.searchInputContainer}>
      <FontAwesomeIcon icon={faSearch} />
      <TextInput
        ref={textInputRef}
        onPress={handleFocus}
        style={style.searchInput}
      />
    </Pressable>
  );
};

export default Search;
