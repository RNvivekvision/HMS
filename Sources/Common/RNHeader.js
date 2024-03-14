import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import {
  RNKeyboardAvoid,
  RNIcon,
  RNStyles,
  RNText,
  RNScrollView,
} from './index';
import { Images } from '../Constants';
import { useInset } from '../Hooks';

const RNHeader = ({
  title,
  scrollProps,
  containerStyle,
  titleStyle,
  children,
  style,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();

  return (
    <View style={RNStyles.container}>
      <View style={[styles.Container, containerStyle]}>
        <RNIcon
          icon={Images.Back}
          iconStyle={RNStyles.image90}
          onPress={() => navigation.goBack()}
          containerStyle={styles.icon}
        />
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
      </View>

      <RNScrollView style={style} scrollProps={scrollProps}>
        {children}
      </RNScrollView>
    </View>
  );
};

const iconSize = wp(7);
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    contentContainerStyle: {
      paddingBottom: inset.bottom + hp(2),
      paddingVertical: hp(2),
    },
    Container: {
      ...RNStyles.flexRow,
      backgroundColor: Colors.White,
      paddingHorizontal: wp(4),
      paddingTop: inset.top + hp(2),
      paddingVertical: hp(2),
    },
    icon: {
      ...RNStyles.center,
      width: iconSize,
      height: iconSize,
    },
    title: {
      flex: 1,
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font18,
      fontFamily: FontFamily.Bold,
    },
  });
};

export default RNHeader;
