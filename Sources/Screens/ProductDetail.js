import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HMProduct, HMSearchFilter } from '../Components';
import { RNButton, RNHeader, RNStyles } from '../Common';
import { DummyData } from '../Utils';
import { hp, wp } from '../Theme';

const ProductDetail = ({ navigation }) => {
  return (
    <RNHeader
      title={'Steinkohle / Wesola'}
      footer={<RNButton title={'Save'} style={styles.button} />}>
      <HMSearchFilter />

      <View style={styles.contentContainer}>
        {DummyData.Product.ProductDetails.map((v, i) => (
          <HMProduct key={i} item={v} />
        ))}
      </View>
    </RNHeader>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
  },
  button: {
    marginHorizontal: wp(4),
  },
});

export default ProductDetail;
