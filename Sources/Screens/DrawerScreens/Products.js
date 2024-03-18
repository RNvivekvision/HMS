import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNButton, RNStyles, RNText } from '../../Common';
import {
  HMHeader,
  HMList,
  HMSearchFilter,
  ProductFilter,
} from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

const Products = ({ navigation }) => {
  const ref = useRef();

  return (
    <View style={RNStyles.container}>
      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{'Product list'}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <RNButton
          title={'Mine/Pit'}
          style={styles.minePitButton}
          textStyle={{ fontSize: FontSize.font12 }}
        />

        <HMList
          title={'Latest Product List'}
          data={DummyData.Business.LatestBusinessList}
          viewText={'View Product'}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.ProductDetail)
          }
        />

        <HMList
          vStack={true}
          title={'All Product List'}
          titleChildrenText={'All Product'}
          data={Functions.spliteArray(DummyData.Business.AllBusinessList)}
          viewText={'View Product'}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.ProductDetail)
          }
        />
      </HMHeader>

      <RNBottomSheet snapPoints={['60%']} ref={ref}>
        <ProductFilter ref={ref} />
      </RNBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.Bold,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  minePitButton: {
    backgroundColor: Colors.Primary2,
    marginHorizontal: wp(4),
    paddingVertical: hp(1),
    marginTop: hp(2),
    borderRadius: wp(2),
  },
});

export default Products;
