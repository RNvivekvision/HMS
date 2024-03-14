import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import {
  RNGradient,
  RNIcon,
  RNImage,
  RNScrollView,
  RNStyles,
  RNText,
} from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';
import { DummyData } from '../Utils';
import { useInset } from '../Hooks';
import { HMEntity } from '../Components';

const UserProfile = ({ navigation }) => {
  const styles = useStyles();

  return (
    <View style={[RNStyles.container]}>
      <StatusBar backgroundColor={Colors.Primary1} translucent={true} />
      <RNGradient
        colors={[Colors.Primary1, Colors.Primary2]}
        style={[styles.container]}>
        <View style={styles.headerContainer}>
          <View style={RNStyles.flexRow}>
            <RNIcon
              icon={Images.Back}
              iconStyle={styles.iconStyle}
              onPress={() => navigation.goBack()}
            />

            <RNText
              pLeft={wp(2)}
              family={FontFamily.Bold}
              size={FontSize.font20}
              color={Colors.White}>
              {'User Profile'}
            </RNText>
          </View>

          <RNIcon icon={Images.EditUserProfile} iconStyle={styles.iconStyle} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <RNImage source={Images.Dummy_user1} style={styles.userImage} />
          <RNText pBottom={hp(1)} size={FontSize.font18} color={Colors.White}>
            {'Vana Starykova'}
          </RNText>
          <RNText pBottom={hp(3)} size={FontSize.font14} color={Colors.White}>
            {`user_name: ${'ystarykova'}`}
          </RNText>
        </View>
      </RNGradient>

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <RNScrollView>
        <View style={styles.UserDetailsContainer}>
          {DummyData.UserProfile.UserDetail.map((v, i) => (
            <View key={i} style={styles.UserDetails}>
              <RNText family={FontFamily.SemiBold}>{v.title}</RNText>
              <RNText style={styles.text}>{v.text}</RNText>
            </View>
          ))}
        </View>

        <HMEntity
          containerStyle={{
            marginHorizontal: wp(4),
          }}
          data={DummyData.UserProfile.EntitiesAndRights}
          title={'Entities & Rights'}
        />
      </RNScrollView>

      {/* </ScrollView> */}
    </View>
  );
};

const bottomRadius = wp(7);
const userImage = wp(30);
const borderColor = Colors.Black + '40';
const textColor = Colors.Black + '99';
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      paddingTop: inset.top,
      borderBottomLeftRadius: bottomRadius,
      borderBottomRightRadius: bottomRadius,
    },
    headerContainer: {
      ...RNStyles.flexRowBetween,
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
    iconStyle: {
      width: wp(7),
      height: wp(7),
      tintColor: Colors.White,
    },
    userImage: {
      width: userImage,
      height: userImage,
      borderRadius: 100,
      marginVertical: hp(1),
    },
    UserDetailsContainer: {
      ...RNStyles.flexWrapHorizontal,
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: wp(4),
      marginHorizontal: wp(4),
      marginVertical: hp(1),
      paddingVertical: hp(2),
    },
    UserDetails: {
      width: '50%',
      paddingHorizontal: wp(6),
      paddingVertical: hp(1),
    },
    text: {
      paddingTop: hp(1),
      fontSize: FontSize.font14,
      color: textColor,
    },
    entityContainer: {
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: wp(4),
      marginHorizontal: wp(4),
      marginVertical: hp(3),
    },
    entityTitleContainer: {
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      backgroundColor: Colors.PlaceholderBackground,
      borderTopLeftRadius: wp(4),
      borderTopRightRadius: wp(4),
    },
    renderEntityContainer: {
      ...RNStyles.flexRow,
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
    },
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: 100,
      backgroundColor: Colors.Edit + '15',
      marginHorizontal: wp(1.5),
    },
    renderEntityText: {
      fontSize: FontSize.font12,
      color: textColor,
      paddingTop: hp(0.5),
    },
  });
};

export default UserProfile;
