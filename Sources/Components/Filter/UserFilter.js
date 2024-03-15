import React, { forwardRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles } from '../../Common';
import { HMDropDown, HMFilterTitle } from '../index';
import { DummyData } from '../../Utils';
import { hp, wp } from '../../Theme';

const UserFilter = forwardRef(({}, ref) => {
  const [State, setState] = useState({
    userRight: null,
    entities: null,
    shortName: null,
    userName: null,
  });

  const closeSheet = () => ref.current.close();

  return (
    <View style={RNStyles.container}>
      <HMFilterTitle title={'Filter'} onClosePress={closeSheet} />

      <View style={styles.dropdownContainer}>
        <HMDropDown
          title={'User Rights'}
          data={DummyData.ProductFilterDropDown.UserRights}
          placeholder={'Please Select'}
          onChange={value => setState(p => ({ ...p, userRight: value }))}
          value={State.userRight}
        />
        <HMDropDown
          title={'Entities'}
          data={DummyData.ProductFilterDropDown.Entities}
          placeholder={'Please Select'}
          onChange={value => setState(p => ({ ...p, entities: value }))}
          value={State.entities}
        />
        <HMDropDown
          title={'Short Name'}
          data={DummyData.ProductFilterDropDown.ShortName}
          placeholder={'Please Select'}
          onChange={value => setState(p => ({ ...p, shortName: value }))}
          value={State.shortName}
        />
        <HMDropDown
          title={'User Name'}
          data={DummyData.ProductFilterDropDown.UserName}
          placeholder={'Please Select'}
          position={'top'}
          onChange={value => setState(p => ({ ...p, userName: value }))}
          value={State.userName}
        />
      </View>

      <RNButton title={'Apply'} style={styles.button} onPress={closeSheet} />
    </View>
  );
});

const styles = StyleSheet.create({
  button: {
    marginHorizontal: wp(4),
    marginVertical: hp(3),
  },
  dropdownContainer: {
    paddingHorizontal: wp(4),
  },
});

export default UserFilter;
