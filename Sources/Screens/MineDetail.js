import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  EmployeeDetail,
  HMDropDown,
  HMInput,
  HMProduct,
  HMSearchFilter,
  UploadFile,
} from '../Components';
import { RNButton, RNHeader, RNInput, RNStyles, RNText } from '../Common';
import { DummyData } from '../Utils';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';

const MineDetail = ({ navigation }) => {
  const otherInfoRef = useRef();
  const [State, setState] = useState({ country: null, city: null });

  return (
    <RNHeader title={'Zululand Colliery'}>
      <HMSearchFilter />

      <View style={styles.content}>
        <RNText style={styles.title}>{'Mine/Pits'}</RNText>

        <HMInput title={'Name*'} placeholder={'Zululand Colliery'} />
        <HMDropDown
          title={'Country*'}
          data={DummyData.UserProfile.Languages}
          placeholder={'South Africa'}
          onChange={v => setState(p => ({ ...p, country: v }))}
          value={State.country}
        />
        <HMDropDown
          title={'City*'}
          data={DummyData.UserProfile.Languages}
          placeholder={'Uganda'}
          onChange={v => setState(p => ({ ...p, city: v }))}
          value={State.city}
        />
        <HMInput title={'Partner*'} placeholder={'Zac'} />
        <HMInput title={'Region*'} placeholder={'Ulundi(KZN)'} />
        <HMInput
          title={'Production Capacity*'}
          placeholder={'720,000 mt p.a.'}
        />

        <View style={{ paddingTop: hp(1.5) }}>
          <RNText pBottom={hp(1)} color={Colors.Placeholder}>
            {'Other Information'}
          </RNText>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => otherInfoRef.current.focus()}
            style={styles.otherInfo}>
            <RNInput
              ref={otherInfoRef}
              multiline={true}
              placeholder={'Enter Other information'}
            />
          </TouchableOpacity>
        </View>

        <UploadFile />
        <EmployeeDetail />

        <RNButton title={'Save'} />
      </View>
    </RNHeader>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Bold,
    paddingVertical: hp(2),
  },
  otherInfo: {
    height: hp(17),
    borderRadius: wp(3),
    backgroundColor: Colors.PlaceholderBackground,
  },
});

export default MineDetail;
