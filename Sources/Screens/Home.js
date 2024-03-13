import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HMHeader, HMSearchFilter, RNText } from '../Common';
import { FontFamily, FontSize, hp, wp } from '../Theme';

const Home = () => {
  return (
    <HMHeader>
      <RNText style={styles.title}>{'User list'}</RNText>

      <HMSearchFilter placeholder={'Search here'} />
    </HMHeader>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.Bold,
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
    paddingBottom: hp(2),
  },
});

export default Home;
