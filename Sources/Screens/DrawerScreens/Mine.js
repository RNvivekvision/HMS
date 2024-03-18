import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles, RNText } from '../../Common';
import { HMHeader, HMList, HMSearchFilter } from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

const Mine = ({ navigation }) => {
  const ref = useRef();

  return (
    <View style={RNStyles.container}>
      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{'Mine/Pit List'}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <HMList
          title={'Latest Mine/Pits List'}
          data={DummyData.Business.LatestBusinessList}
          viewText={'View Mine'}
          onViewProfilePress={() => navigation.navigate(NavRoutes.MineDetail)}
        />

        <HMList
          title={'All Product List'}
          titleChildrenText={'All Product'}
          data={Functions.spliteArray(DummyData.Business.AllBusinessList)}
          vStack={true}
          viewText={'View Mine'}
          onViewProfilePress={() => navigation.navigate(NavRoutes.MineDetail)}
        />
      </HMHeader>
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

export default Mine;
