import React, { forwardRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles } from '../../Common';
import { HMDropDown, HMFilterTitle } from '../index';
import { DummyData } from '../../Utils';
import { hp, wp } from '../../Theme';

const ProductFilter = forwardRef(({}, ref) => {
  const [State, setState] = useState({
    partner: null,
    specType: null,
    country: null,
  });

  const closeSheet = () => ref.current.close();

  return (
    <View style={RNStyles.container}>
      <HMFilterTitle title={'Filter'} onClosePress={closeSheet} />

      <View style={styles.dropdownContainer}>
        <HMDropDown
          title={'Partner'}
          data={DummyData.ProductFilterDropDown.UserRights}
          placeholder={'Please Select'}
          onChange={value => setState(p => ({ ...p, partner: value }))}
          value={State.partner}
        />
        <HMDropDown
          title={'Spec. Type'}
          data={DummyData.ProductFilterDropDown.Entities}
          placeholder={'Please Select'}
          onChange={value => setState(p => ({ ...p, specType: value }))}
          value={State.specType}
        />
        <HMDropDown
          title={'Country'}
          data={DummyData.ProductFilterDropDown.ShortName}
          placeholder={'Please Select'}
          position={'top'}
          onChange={value => setState(p => ({ ...p, country: value }))}
          value={State.country}
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

export default ProductFilter;
