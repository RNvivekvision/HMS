import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNStyles, RNText } from '../../Common';
import {
  HMHeader,
  HMList,
  HMSearchFilter,
  BusinessFilter,
} from '../../Components';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

const Business = ({ navigation }) => {
  const ref = useRef();

  return (
    <View style={RNStyles.container}>
      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{'Business List'}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <HMList
          data={DummyData.Business.LatestBusinessList}
          title={'Latest Business List'}
          viewText={'View Business'}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.BusinessDetail)
          }
        />

        <HMList
          data={Functions.spliteArray(DummyData.Business.AllBusinessList)}
          vStack={true}
          viewText={'View Business'}
          title={'All Business List'}
          titleChildrenText={'All Business'}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.BusinessDetail)
          }
        />
      </HMHeader>

      <RNBottomSheet snapPoints={['50%']} ref={ref}>
        <BusinessFilter ref={ref} />
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
});

export default Business;
