import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../../assets/styles/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import style from './style';
import Header from '../../../components/Header/Header';
import Search from '../../../components/Search/Search';
import {FlatList} from 'react-native-gesture-handler';
import Tab from '../../../components/Tab/Tab';
import {
  Category,
  updateSelectedCategoryId,
} from '../../../redux/reducers/Categories';
import {RootState} from '../../../redux/store';
import {DonationItem} from '../../../redux/reducers/Donations';
import SingleDonationItem from '../../../components/SingleDonationItem/SingleDonationitem';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const categories = useSelector((state: RootState) => state.categories);

  const donations = useSelector((state: RootState) => state.donations);

  const {firstName, lastName, profileImage} = user;

  const [donationItems, setDonationItems] = useState<DonationItem[]>([]);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const categoryPageSize = 4;

  console.log('donationItems:', donationItems);

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.selectedCategoryId]);

  // console.log('donations:', donations);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
    // The suggested deps were causing infinite rerenders. Not sure why. Works fine this way and this is how the instructor did it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pagination = (
    items: Category[],
    pageNumber: number,
    pageSize: number,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

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
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => {
              return (
                <View style={style.categoryItem} key={item.categoryId}>
                  <Tab
                    tabId={item.categoryId}
                    onPress={(value: unknown) => {
                      dispatch(updateSelectedCategoryId(value));
                    }}
                    title={item.name}
                    isInactive={
                      item.categoryId !== categories.selectedCategoryId
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => (
              <SingleDonationItem
                donationTitle={value.name}
                uri={value.image}
                badgeTitle={
                  categories.categories.filter(
                    val => val.categoryId === categories.selectedCategoryId,
                  )[0].name
                }
                key={value.donationItemId}
                price={parseFloat(value.price)}
                donationItemId={value.donationItemId}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
