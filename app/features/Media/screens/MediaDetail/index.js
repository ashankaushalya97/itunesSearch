import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {getSelectedData} from '../../selectors';
import {useSelector} from 'react-redux';
import arr from '../../../../assets/img/back.png';
import * as RootNavigation from '../../../../navigation/RootNavigation';
import moment from 'moment';

const MediaDetail = () => {
  const [data, setData] = useState();
  const selected = useSelector(getSelectedData);

  useEffect(() => {
    selected && setData(selected);
  }, [selected]);

  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={[styles.searchWrap, styles.flexRowSP, styles.mT20]}>
          <TouchableOpacity onPress={() => RootNavigation.goBack()}>
            <Image style={styles.backArrow} source={arr} />
          </TouchableOpacity>
          <Text style={styles.title}>{data?.trackName}</Text>
          <View />
        </View>
        <View style={({maxHeight: '80%'}, {marginBottom: 200, padding: 10})}>
          <TouchableOpacity
            style={[styles.item, styles.flexRowCSB]}
            onPress={() => {}}>
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
              <Text style={styles.itemSubTitle}>{data?.trackPrice}</Text>
              <Text style={styles.itemSubTitle}>
                {moment(data?.releaseDate).format('dd/MM/yyyy HH:mm')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MediaDetail;
