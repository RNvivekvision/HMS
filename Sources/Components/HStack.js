import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { RNButton, RNIcon, RNImage, RNStyles, RNText } from '../Common';
import { Images } from '../Constants';

const HStack = ({ item }) => {
  const styles = useStyles();

  return (
    <View style={styles.renderContainer}>
      <View style={styles.renderContent}>
        <RNImage source={item.profilePic} style={styles.profilePic} />
        <View style={styles.nameContainer}>
          <RNText numOfLines={1} style={styles.name}>
            {item.name}
          </RNText>
          <RNText size={FontSize.font8}>{item.number}</RNText>
        </View>
      </View>

      <View style={styles.renderButtons}>
        <RNButton
          title={'View Profile'}
          textStyle={{ fontSize: FontSize.font12 }}
          style={styles.viewProfile}
        />

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

const useStyles = () => {
  return StyleSheet.create({
    renderContainer: {
      ...RNStyles.shadow,
      width: wp(60),
      marginRight: wp(3),
      paddingHorizontal: wp(4),
      borderRadius: wp(4),
      backgroundColor: Colors.White,
      marginVertical: hp(2),
      borderWidth: 1,
      borderColor: Colors.Primary2 + '20',
    },
    renderContent: {
      ...RNStyles.flexRow,
      paddingTop: hp(2),
      paddingBottom: hp(0.5),
    },
    nameContainer: {
      paddingLeft: wp(2),
      flex: 1,
    },
    name: {
      fontSize: FontSize.font12,
      fontFamily: FontFamily.Bold,
      paddingBottom: hp(0.5),
    },
    profilePic: {
      width: wp(12),
      height: wp(12),
      borderRadius: 100,
      borderWidth: 1,
      borderColor: Colors.Black + '30',
    },
    renderButtons: {
      ...RNStyles.flexRowBetween,
      paddingBottom: hp(1),
    },
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: 100,
      backgroundColor: Colors.Edit + '15',
      marginLeft: wp(2),
    },
    viewProfile: {
      paddingHorizontal: wp(2),
      paddingVertical: hp(0.8),
      borderRadius: wp(2),
      marginLeft: 0,
    },
  });
};

export default HStack;