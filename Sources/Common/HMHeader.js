import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Colors, hp, wp } from '../Theme';
import { Images } from '../Constants';
import RNGradient from './RNGradient';
import RNStyles from './RNStyles';
import RNIcon from './RNIcon';

const HMHeader = ({
  gradientStyle,
  containerStyle,
  contentContainerStyle,
  children,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();

  return (
    <View style={[RNStyles.container, containerStyle]}>
      <StatusBar backgroundColor={Colors.Primary1} translucent={true} />
      <RNGradient
        colors={[Colors.Primary1, Colors.Primary2]}
        style={[styles.container, gradientStyle]}>
        <View style={styles.userContent}>
          <RNIcon
            icon={Images.Drawer}
            onPress={() => navigation.openDrawer()}
          />

          <View style={RNStyles.flexRow}>
            <RNIcon
              icon={Images.Search}
              containerStyle={styles.iconContainerStyle}
            />
            <RNIcon
              icon={Images.Notification}
              containerStyle={styles.iconContainerStyle}
            />
            <RNIcon
              icon={Images.Dummy_user1}
              containerStyle={styles.userImageContainer}
              iconStyle={styles.userImage}
            />
          </View>
        </View>
      </RNGradient>
      <ScrollView>
        <View style={[RNStyles.container, contentContainerStyle]}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

const bottomRadius = wp(5);
const useStyles = () => {
  const inset = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      paddingTop: inset.top,
      borderBottomLeftRadius: bottomRadius,
      borderBottomRightRadius: bottomRadius,
    },
    userContent: {
      ...RNStyles.flexRowBetween,
      paddingHorizontal: wp(3),
      paddingVertical: hp(3),
    },
    iconContainerStyle: {
      marginRight: wp(4),
    },
    userImageContainer: {
      width: wp(10),
      height: wp(10),
      borderRadius: 100,
      marginRight: wp(2),
    },
    userImage: {
      ...RNStyles.image100,
      borderRadius: 100,
    },
  });
};

export default HMHeader;
