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
  containerStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RNText color={Colors.DropdownPlaceHolder}>{title}</RNText>
      {data?.length > 0 && (
        <Dropdown
          style={styles.dropdownStyle}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          activeColor={Colors.PlaceholderBackground}
          itemTextStyle={styles.itemTextStyle}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2),
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
    color: Colors.Black,
  },
  itemTextStyle: {
    fontFamily: FontFamily.Medium,
    color: Colors.Black,
  },
  iconStyle: {
    width: wp(8),
    height: wp(8),
    tintColor: Colors.Black,
  },
});

export default HMDropDown;
