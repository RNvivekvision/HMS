import React, { useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNStyles, RNText } from '../Common';
import {
  HMHeader,
  HMList,
  HMSearchFilter,
  HomeFilterContent,
} from '../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { DummyData } from '../Utils';
import { NavRoutes } from '../Navigation';

const Home = ({ navigation }) => {
  const ref = useRef();

  const vStackData = useMemo(() => {
    const half = Math.floor(DummyData.LatestNewUsers.length / 2);
    const firstHalfData = DummyData.LatestNewUsers?.slice(0, half);
    const secondHalfData = DummyData.LatestNewUsers?.slice(half);
    return [firstHalfData, secondHalfData];
  }, [DummyData.LatestNewUsers]);

  return (
    <View style={RNStyles.container}>
      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{'User list'}</RNText>

        <HMSearchFilter
          placeholder={'Search here'}
          onFilterPress={() => ref.current?.present()}
        />

        <HMList
          data={DummyData.LatestNewUsers}
          title={'Latest New User'}
          titleChildrenText={'+ Add New User'}
          titleChildrenStyle={{ color: Colors.Button }}
          ontitleChildrenPress={() => navigation.navigate(NavRoutes.AddNewUser)}
        />

        <HMList
          data={vStackData}
          vStack={true}
          title={'All User List'}
          titleChildrenText={'All user'}
        />
      </HMHeader>

      <RNBottomSheet ref={ref}>
        <HomeFilterContent ref={ref} />
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

export default Home;
