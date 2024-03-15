import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNIcon, RNStyles, RNText, RNInput } from '../../Common';
import { HMDropDown, HMInput } from '../index';
import { Colors, hp, FontSize, FontFamily, wp } from '../../Theme';
import { DummyData } from '../../Utils';
import { Images } from '../../Constants';
import moment from 'moment';

const NewBusiness = () => {
  const otherInfoRef = useRef();
  const [State, setState] = useState({
    entity: null,
    deliveryPeriod: { month: null, year: null },
    dischargingPort: null,
    commenceDate: new Date(),
    expectedRevenue: { value: null, currency: null },
    archive: null,
  });

  const onCommenceDatePress = () => {};

  return (
    <View style={RNStyles.container}>
      <RNText style={styles.title}>{'New Business'}</RNText>

      <HMInput title={'Name*'} placeholder={'RIL/Bapnu 2024'} />
      <HMInput title={'Export Qty*'} placeholder={'550.000'} />
      <HMInput title={'Expted no. of deliv*'} placeholder={'6'} />

      <View style={{ paddingTop: hp(1.5) }}>
        <RNText color={Colors.Placeholder}>{'Delivery Period*'}</RNText>
        <View style={RNStyles.flexRow}>
          <View style={styles.blueWrapper}>
            <RNInput
              placeholder={'January - December'}
              style={styles.deliveryMonthInput}
              onChangeText={v =>
                setState(p => ({
                  ...p,
                  deliveryPeriod: { ...p.deliveryPeriod, month: v },
                }))
              }
              value={State.deliveryPeriod.month}
            />
          </View>
          <HMDropDown
            data={DummyData.UserProfile.Languages}
            dropdownStyle={styles.wrapperDropdownStyle}
            placeholder={'2024'}
            onChange={v =>
              setState(p => ({
                ...p,
                deliveryPeriod: { ...p.deliveryPeriod, year: v },
              }))
            }
            value={State.deliveryPeriod.year}
          />
        </View>
      </View>

      <HMDropDown
        title={'Discharging Port*'}
        data={DummyData.UserProfile.Languages}
        placeholder={'Aalborg, Nordjyllandsvaerket'}
        onChange={v => setState(p => ({ ...p, dischargingPort: v }))}
        value={State.dischargingPort}
      />

      <View style={{ paddingTop: hp(1.5) }}>
        <RNText color={Colors.Placeholder}>{'Commence Date*'}</RNText>
        <TouchableOpacity
          onPress={onCommenceDatePress}
          style={[styles.blueWrapper, styles.commenceDate]}>
          <RNText>{moment(State.commenceDate).format('DD-MMM-YYYY')}</RNText>
          <RNIcon icon={Images.Calendar} onPress={onCommenceDatePress} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: hp(1.5) }}>
        <RNText color={Colors.Placeholder}>{'Exptd avg. rev./t*'}</RNText>
        <View style={RNStyles.flexRow}>
          <View style={styles.blueWrapper}>
            <RNInput
              placeholder={'0.5'}
              style={styles.deliveryMonthInput}
              onChangeText={v =>
                setState(p => ({
                  ...p,
                  expectedRevenue: { ...p.expectedRevenue, value: v },
                }))
              }
              value={State.expectedRevenue.value}
            />
          </View>
          <HMDropDown
            data={DummyData.UserProfile.Languages}
            dropdownStyle={styles.wrapperDropdownStyle}
            placeholder={'USD'}
            onChange={v =>
              setState(p => ({
                ...p,
                expectedRevenue: { ...p.expectedRevenue, currency: v },
              }))
            }
            value={State.expectedRevenue.currency}
          />
        </View>
      </View>

      <HMInput
        title={'Expted avg. mrg/t*'}
        containerStyle={{ paddingTop: hp(1) }}
        placeholder={'1'}
      />

      <View style={{ paddingTop: hp(1.5) }}>
        <RNText pBottom={hp(1)} color={Colors.Placeholder}>
          {'Other Information'}
        </RNText>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => otherInfoRef.current.focus()}
          style={[styles.blueWrapper, styles.OtherInfo]}>
          <RNInput
            ref={otherInfoRef}
            multiline={true}
            placeholder={'Enter information'}
          />
        </TouchableOpacity>
      </View>

      <RNText size={FontSize.font12} color={Colors.Placeholder}>
        {'(i.e. options, risk adjustment, Etc..)'}
      </RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font18,
    paddingVertical: hp(2),
    fontFamily: FontFamily.Bold,
  },
  blueWrapper: {
    backgroundColor: Colors.PlaceholderBackground,
    borderRadius: wp(3),
    flex: 1,
  },
  wrapperDropdownStyle: {
    marginTop: 0,
    marginLeft: wp(2),
    width: wp(40),
  },
  deliveryMonthInput: {
    marginVertical: 0,
    paddingVertical: hp(1.5),
    textAlign: 'center',
    paddingHorizontal: wp(4),
  },
  commenceDate: {
    ...RNStyles.flexRowBetween,
    backgroundColor: Colors.PlaceholderBackground,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(3),
    marginTop: hp(1),
  },
  OtherInfo: {
    height: hp(17),
    marginBottom: hp(1),
  },
});

export default NewBusiness;
