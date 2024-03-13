import React, { useState } from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { AuthHeader, HMBack } from '../Components';
import { RNButton, RNDevider, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { NavRoutes } from '../Navigation';

const VerifyCode = ({ navigation }) => {
  const [State, setState] = useState({ otp: '' });

  return (
    <AuthHeader>
      <HMBack />

      <RNText pTop={hp(2)} size={FontSize.font28} family={FontFamily.Bold}>
        {'Verify Your Code'}
      </RNText>

      <RNText
        spacing={1}
        pVertical={hp(
          2,
        )}>{`Enter your verification code that we sent you through your e-mail.`}</RNText>

      <RNDevider style={{ marginBottom: hp(3) }} />

      <RNText color={Colors.Placeholder}>{'Enter Code'}</RNText>

      <OtpInput
        numberOfDigits={4}
        onTextChange={otp => setState(p => ({ ...p, otp }))}
        autoFocus
        theme={otpTheme}
      />

      <RNButton
        title={'Verify'}
        style={{ marginTop: hp(8) }}
        onPress={() => navigation.navigate(NavRoutes.ResetPassword)}
      />
    </AuthHeader>
  );
};

const otpTheme = {
  containerStyle: {
    // paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  pinCodeContainerStyle: {
    backgroundColor: Colors.PlaceholderBackground,
    width: wp(20),
    height: wp(18),
  },
  pinCodeTextStyle: {
    fontSize: FontSize.font24,
    fontFamily: FontFamily.Bold,
    color: Colors.Black,
  },
  focusStickStyle: { backgroundColor: Colors.Button },
  focusedPinCodeContainerStyle: { borderColor: Colors.Button },
};

export default VerifyCode;
