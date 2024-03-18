import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNIcon, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';

const EmployeeDetail = () => {
  return (
    <View style={styles.employeeDetail}>
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
    </View>
  );
};

const styles = StyleSheet.create({
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

export default EmployeeDetail;
