import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { RNGradient, RNImage, RNKeyboardAvoid, RNStyles } from '../Common';
import { Colors, hp, wp } from '../Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../Constants';

const AuthHeader = ({
  children,
  containerStyle,
  gradientStyle,
  contentContainerStyle,
}) => {
  const styles = useStyles();

  return (
    <View style={[RNStyles.container, containerStyle]}>
      <StatusBar backgroundColor={Colors.Primary1} translucent={true} />
      <RNGradient
        colors={[Colors.Primary1, Colors.Primary2]}
        style={[styles.container, gradientStyle]}>
        <RNImage source={Images.AppLogo} style={styles.logo} />
      </RNGradient>

      <RNKeyboardAvoid>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <View style={[styles.content, contentContainerStyle]}>
            {children}
          </View>
        </ScrollView>
      </RNKeyboardAvoid>
    </View>
  );
};

const bottomRadius = wp(5);
const useStyles = () => {
  const inset = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      ...RNStyles.center,
      paddingTop: inset.top,
      height: hp(25),
      borderBottomLeftRadius: bottomRadius,
      borderBottomRightRadius: bottomRadius,
    },
    logo: {
      width: '60%',
      height: hp(10),
      marginBottom: hp(2),
    },
    content: {
      ...RNStyles.container,
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
  });
};

export default AuthHeader;
