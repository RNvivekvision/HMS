import React, { forwardRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, hp, wp } from '../Theme';
import RNInput from './RNInput';
import RNStyles from './RNStyles';
import RNText from './RNText';

const HMInput = forwardRef(
  ({ title, icon, onIconPress, error, ...rest }, ref) => {
    const styles = useStyles({ error });

    return (
      <View style={styles.container}>
        {title && <RNText style={styles.title}>{title}</RNText>}
        <View style={styles.inputContainer}>
          <RNInput
            ref={ref}
            placeholderTextColor={error ? Colors.Error : Colors.Placeholder}
            style={styles.input}
            {...rest}
          />

          {icon && (
            <TouchableOpacity
              style={styles.IconContainer}
              activeOpacity={0.6}
              onPress={onIconPress}>
              <Image source={icon} resizeMode={'contain'} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  },
);

const useStyles = ({ error }) => {
  return StyleSheet.create({
    container: {
      paddingTop: hp(2),
    },
    title: {
      color: error ? Colors.Error : Colors.Placeholder,
    },
    inputContainer: {
      ...RNStyles.flexRow,
      backgroundColor: error ? Colors.Error : Colors.PlaceholderBackground,
      paddingHorizontal: wp(4),
      paddingVertical: hp(0.7),
      borderRadius: wp(3),
      marginTop: hp(1),
    },
    input: {
      flex: 1,
      marginVertical: 0,
      paddingHorizontal: 0,
      color: error ? Colors.Error : Colors.N054579,
    },
    IconContainer: {
      ...RNStyles.center,
      width: wp(8),
      height: wp(8),
      marginLeft: wp(1),
    },
    icon: {
      ...RNStyles.image60,
      tintColor: error ? Colors.Error : Colors.Button,
    },
  });
};

export default HMInput;