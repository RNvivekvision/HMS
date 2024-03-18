import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { RNHeader, RNIcon, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import {
  HMDropDown,
  HMSearchFilter,
  HMEmployee,
  HMEmployeeDetails,
  Archive,
  UploadFile,
  NewBusiness,
  EmployeeDetail,
} from '../Components';
import { DummyData } from '../Utils';
import { Images } from '../Constants';

const BusinessDetail = ({ navigation }) => {
  const [State, setState] = useState({
    entity: null,
  });

  return (
    <RNHeader style={{ paddingHorizontal: wp(4) }} title={'B752 - Ril/Banpu'}>
      <HMSearchFilter
        containerStyle={{ paddingHorizontal: 0 }}
        onFilterPress={() => {}}
      />

      <RNText style={styles.title}>{'Responsible Employees'}</RNText>
      <View style={RNStyles.flexRowBetween}>
        <HMDropDown
          dropdownStyle={styles.entityDropdownStyle}
          dropdownPlaceholderStyle={styles.dropdownPlaceholderStyle}
          dropDownIconStyle={styles.dropDownIconStyle}
          dropDownSelectedTextStyle={styles.dropdownPlaceholderStyle}
          data={DummyData.ProductFilterDropDown.Entities}
          placeholder={'Select Entity'}
          onChange={value => setState(p => ({ ...p, entity: value }))}
          value={State.entity}
        />

        <View>
          <View style={styles.selectedContainer}>
            <View style={[styles.box, { backgroundColor: Colors.Button }]} />
            <RNText size={FontSize.font12}>{'Selected'}</RNText>
          </View>
          <View style={styles.selectedContainer}>
            <View
              style={[
                styles.box,
                { backgroundColor: Colors.PlaceholderBackground },
              ]}
            />
            <RNText size={FontSize.font12}>{'Not Selected'}</RNText>
          </View>
        </View>
      </View>

      <FlatList
        data={DummyData.Business.BusinessDetails}
        keyExtractor={(v, i) => String(i)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <HMEmployee item={item} />}
      />

      <NewBusiness />

      <Archive />

      <UploadFile />

      {/* <View style={styles.employeeDetail}>
        <View style={RNStyles.flexRow}>
          <RNText size={FontSize.font12} color={Colors.Placeholder}>
            {'Employee Name : '}
          </RNText>
          <RNText size={FontSize.font12} family={FontFamily.Bold}>
            {'Alisa Alis (AAr)'}
          </RNText>
        </View>
        <View style={RNStyles.flexRow}>
          <RNText size={FontSize.font12} color={Colors.Placeholder}>
            {'Upload Date : '}
          </RNText>
          <RNText size={FontSize.font12} family={FontFamily.Bold}>
            {'23.11.23  05:56 PM'}
          </RNText>
        </View>
        <View style={RNStyles.flexRow}>
          <RNText size={FontSize.font12} color={Colors.Placeholder}>
            {'Upload File : '}
          </RNText>
          <RNText size={FontSize.font12} family={FontFamily.Bold}>
            {'Business File 1. PDF'}
          </RNText>
        </View>

        <View style={styles.employeeDetailIcon}>
          <RNIcon icon={Images.Document} />
          <View style={RNStyles.flexRow}>
            <RNIcon
              icon={Images.Edit}
              iconStyle={RNStyles.image60}
              containerStyle={styles.iconContainer}
            />
            <RNIcon
              icon={Images.Delete}
              iconStyle={RNStyles.image60}
              containerStyle={[
                styles.iconContainer,
                { backgroundColor: Colors.Delete + '15' },
              ]}
            />
          </View>
        </View>
      </View> */}

      <EmployeeDetail />

      {DummyData.Business.EmployeeDetails.map((v, i) => (
        <HMEmployeeDetails key={i} item={v} />
      ))}
    </RNHeader>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font18,
    paddingVertical: hp(2),
    fontFamily: FontFamily.Bold,
  },
  box: {
    width: wp(4),
    height: wp(4),
    marginRight: wp(2),
  },
  selectedContainer: {
    ...RNStyles.flexRowBetween,
    paddingVertical: hp(1),
  },
  entityDropdownStyle: {
    borderWidth: 1,
    width: wp(45),
    marginTop: 0,
    backgroundColor: Colors.Primary2,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.2),
  },
  dropdownPlaceholderStyle: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Bold,
    color: Colors.White,
  },
  dropDownIconStyle: {
    ...RNStyles.icon,
    tintColor: Colors.White,
  },
  employeeDetail: {
    borderWidth: 1,
    borderColor: Colors.Black + '40',
    borderRadius: wp(3),
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
  },
  employeeDetailIcon: {
    ...RNStyles.flexRowBetween,
    width: '75%',
    alignSelf: 'flex-end',
    paddingTop: hp(0.5),
  },
  iconContainer: {
    width: wp(8),
    height: wp(8),
    borderRadius: 100,
    backgroundColor: Colors.Edit + '15',
    marginLeft: wp(2),
  },
});

export default BusinessDetail;
