import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontFamily, FontSize, hp, isIOS, wp } from '../Theme';
import RNText from './RNText';
import RNStyles from './RNStyles';

const RNHeader = ({
  title,
  onLeftPress,
  LeftIcon,
  onRightPress,
  RightIcon,
  containerStyle,
  titleStyle,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.Container, containerStyle]}>
      {LeftIcon ? (
        <RNIcon
          icon={LeftIcon}
          iconStyle={RNStyles.image90}
          onPress={() => (onLeftPress ? onLeftPress?.() : navigation.goBack())}
          containerStyle={styles.Left}
        />
      ) : (
        <View style={styles.Left} />
      )}
      <RNText style={[styles.title, titleStyle]}>{title}</RNText>
      {RightIcon ? (
        <RNIcon
          icon={RightIcon}
          iconStyle={RNStyles.image90}
          onPress={onRightPress}
          containerStyle={styles.Right}
        />
      ) : (
        <View style={styles.Right} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.flexRowBetween,
    backgroundColor: Colors.White,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    paddingTop: isIOS ? hp(6) : hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: Colors.Placeholder,
  },
  Left: {
    ...RNStyles.center,
    width: wp(6),
    height: wp(6),
  },
  title: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: hp(1),
    marginHorizontal: hp(1),
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
  },
  Right: {
    ...RNStyles.center,
    width: wp(6),
    height: wp(6),
  },
});

export default RNHeader;
