import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { RNButton, RNIcon, RNImage, RNStyles, RNText } from '../Common';
import { Images } from '../Constants';

const VStack = ({ item }) => {
  const styles = useStyles();

  return (
    <View style={styles.renderContainer}>
      <View style={styles.profilePicContainer}>
        {item?.isLive && <View style={styles.live} />}
        <RNImage source={item.profilePic} style={styles.profilePic} />
      </View>
      <RNText style={styles.name}>{item.name}</RNText>
      <RNText style={styles.name}>{item.id}</RNText>
      <RNText size={FontSize.font8}>{item.number}</RNText>

      <RNButton
        title={'View Profile'}
        textStyle={{ fontSize: FontSize.font10 }}
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
  );
};

const useStyles = () => {
  return StyleSheet.create({
    renderContainer: {
      ...RNStyles.shadow,
      width: wp(44),
      marginRight: wp(3),
      paddingHorizontal: wp(2),
      borderRadius: wp(4),
      backgroundColor: Colors.White,
      marginTop: hp(1),
      marginBottom: hp(0.5),
      borderWidth: 1,
      borderColor: Colors.Primary2 + '20',
      alignItems: 'center',
      paddingVertical: hp(1.5),
    },
    name: {
      fontSize: FontSize.font12,
      fontFamily: FontFamily.Bold,
      paddingBottom: hp(0.5),
      textAlign: 'center',
      width: '100%',
      paddingTop: hp(0.5),
    },
    profilePicContainer: {
      width: wp(13),
      height: wp(13),
      borderWidth: 1,
      borderRadius: 100,
      borderColor: Colors.Black + '30',
    },
    live: {
      width: wp(4),
      height: wp(4),
      backgroundColor: Colors.Live,
      position: 'absolute',
      zIndex: 1,
      borderRadius: 100,
      top: -2,
      right: -2,
      borderWidth: 2,
      borderColor: Colors.White,
    },
    profilePic: {
      ...RNStyles.image100,
      borderRadius: 100,
    },
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: 100,
      backgroundColor: Colors.Edit + '15',
      marginHorizontal: wp(2),
    },
    viewProfile: {
      paddingHorizontal: wp(2),
      paddingVertical: hp(0.8),
      borderRadius: wp(2),
    },
  });
};

export default VStack;
