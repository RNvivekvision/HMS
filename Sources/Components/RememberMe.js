import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../Common';
import { Colors, FontSize, wp } from '../Theme';
import { Images } from '../Constants';

const RememberMe = ({ containerStyle, onPress, children }) => {
  const [State, setState] = useState({ checkbox: true });

  const onCheckBoxPress = () => {
    setState(p => ({ ...p, checkbox: !p.checkbox }));
    onPress?.(!State.checkbox);
  };

  return (
    <View style={RNStyles.flexRowBetween}>
      <TouchableOpacity
        onPress={onCheckBoxPress}
        style={[styles.container, containerStyle]}
        activeOpacity={0.6}>
        <View style={RNStyles.flexRow}>
          {State.checkbox ? (
            <RNImage source={Images.RememberTrue} style={styles.icon} />
          ) : (
            <View style={styles.Box} />
          )}
          <RNText
            size={FontSize.font14}
            pHorizontal={wp(2)}
            color={Colors.N475569}>
            {'Remember me'}
          </RNText>
        </View>
      </TouchableOpacity>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: wp(5),
  },
  Box: {
    ...RNStyles.icon,
    borderWidth: 1,
    borderColor: Colors.Black,
    borderRadius: wp(1),
  },
  icon: {
    ...RNStyles.icon,
  },
});

export default RememberMe;
