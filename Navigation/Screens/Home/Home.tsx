import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import style from './style';
import Header from '../../../components/Header/Header';
import Search from '../../../components/Search/Search';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const categories = useSelector((state: RootState) => state.categories);
  console.log('categories:', categories);

  const {firstName, lastName, profileImage} = user;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header type={1} title={`${firstName} ${lastName[0]}. 👋`} />
            </View>
          </View>

          <Image
            source={{uri: profileImage}}
            style={style.profileImage}
            resizeMode="contain"
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
