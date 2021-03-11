import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import styles from './style';
import {searchData, setSelectedItem} from '../../actions';
import {getSearchData} from '../../selectors';
import {useDispatch, useSelector} from 'react-redux';
import * as RootNavigation from '../../../../navigation/RootNavigation';

const MediaList = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const searchMedia = useSelector(getSearchData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      text &&
        dispatch(
          searchData(
            text
              ?.toLowerCase()
              .replace(/[^a-zA-Z ]/g, '')
              .replace(/[' ' ]/g, '&'),
          ),
        );
    }, 3000);
    return () => clearTimeout(timeout);
  }, [text]);

  const handleNavigation = () => {
    RootNavigation.navigate('MediaDetail');
  };

  const handleSelect = (data) => {
    dispatch(setSelectedItem(data, searchMedia));
    handleNavigation();
  };

  const ListItem = ({data}) => {
    return (
      <>
        <TouchableOpacity
          style={[styles.item, styles.flexRowCSB]}
          onPress={() => {
            handleSelect(data);
          }}>
          <Image
            style={styles.icon}
            source={{
              uri: data?.artworkUrl100,
            }}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{data?.trackName}</Text>

            <Text style={styles.itemSubTitle}>{data?.collectionName}</Text>
            <Text style={styles.itemSubTitle}>{data?.artistName}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={[styles.searchWrap]}>
          <TextInput
            placeholder={'Search'}
            onChangeText={(val) => setText(val)}
            style={styles.inputSearch}
          />
        </View>
        <View style={({maxHeight: '80%'}, {marginBottom: 200, padding: 10})}>
          <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            {searchMedia?.length > 0 ? (
              searchMedia?.map((item) => <ListItem data={item} />)
            ) : (
              <View style={[styles.item, styles.flexRowCC]}>
                <Text style={styles.itemSubTitle}>No result found!</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MediaList;
