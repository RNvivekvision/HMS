import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNStyles, RNText } from '../../Common';
import {
  HMHeader,
  HMList,
  HMSearchFilter,
  UserFilter,
} from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

const Users = ({ navigation }) => {
  const ref = useRef();

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
          data={Functions.spliteArray(DummyData.LatestNewUsers)}
          vStack={true}
          title={'All User List'}
          titleChildrenText={'All user'}
        />
      </HMHeader>

      <RNBottomSheet ref={ref}>
        <UserFilter ref={ref} />
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

export default Users;
