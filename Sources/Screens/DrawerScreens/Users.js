import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNStyles, RNText } from '../../Common';
import {
  HMAlert,
  HMDelete,
  HMHeader,
  HMInput,
  HMList,
  HMSearchFilter,
  UserFilter,
} from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

const Users = ({ navigation }) => {
  const ref = useRef();
  const [State, setState] = useState({ showEdit: false, showDelete: false });

  return (
    <View style={RNStyles.container}>
      <HMDelete
        visible={State.showDelete}
        title={'Storage Admin User Rights'}
        text={'Are sure you want to delete storage admin user?'}
        onClose={() => setState(p => ({ ...p, showDelete: false }))}
        buttonProps={{
          onPress: () => setState(p => ({ ...p, showDelete: false })),
        }}
      />

      <HMAlert
        visible={State.showEdit}
        onClose={() => setState(p => ({ ...p, showEdit: false }))}
        title={'Add New User'}
        buttontext={'Add'}
        buttonProps={{
          onPress: () => setState(p => ({ ...p, showEdit: false })),
        }}>
        <HMInput
          title={'Entitie Name'}
          placeholder={'Entitie Name'}
          containerStyle={{ paddingTop: 0 }}
        />
      </HMAlert>

      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{'User list'}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <HMList
          data={DummyData.LatestNewUsers}
          title={'Latest New User'}
          titleChildrenText={'+ Add New User'}
          titleChildrenStyle={{ color: Colors.Button }}
          ontitleChildrenPress={() => navigation.navigate(NavRoutes.AddNewUser)}
          onEditPress={() => setState(p => ({ ...p, showEdit: true }))}
          onDeletePress={() => setState(p => ({ ...p, showDelete: true }))}
        />

        <HMList
          data={Functions.spliteArray(DummyData.LatestNewUsers)}
          vStack={true}
          title={'All User List'}
          titleChildrenText={'All user'}
          onEditPress={() => setState(p => ({ ...p, showEdit: true }))}
          onDeletePress={() => setState(p => ({ ...p, showDelete: true }))}
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
    fontFamily: FontFamily.SemiBold,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
});

export default Users;
