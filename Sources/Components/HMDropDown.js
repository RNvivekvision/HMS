import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { RNText } from '../Common';
import { Colors, FontFamily, hp, wp } from '../Theme';

const HMDropDown = ({
  title,
  data,
  value,
  placeholder,
  maxHeight,
  onChange,
  position,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <RNText color={Colors.DropdownPlaceHolder}>{title}</RNText>
      <Dropdown
        style={styles.dropdownStyle}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        activeColor={Colors.PlaceholderBackground}
        data={data}
        maxHeight={maxHeight ?? hp(25)}
        labelField="label"
        valueField="value"
        placeholder={placeholder ?? ''}
        value={value}
        onChange={onChange}
        dropdownPosition={position ?? 'auto'}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  dropdownStyle: {
    backgroundColor: Colors.PlaceholderBackground,
    borderRadius: wp(3),
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.5),
    marginTop: hp(1),
  },
  placeholderStyle: {
    color: Colors.Placeholder,
  },
  selectedTextStyle: {
    fontFamily: FontFamily.Medium,
  },
  iconStyle: {
    width: wp(8),
    height: wp(8),
    tintColor: Colors.Black,
  },
});

export default HMDropDown;
