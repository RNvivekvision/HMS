import React, { useState } from 'react';
import { RNButton, RNDevider, RNText } from '../Common';
import { AuthHeader, HMBack, HMInput } from '../Components';
import { FontFamily, FontSize, hp } from '../Theme';
import { NavRoutes } from '../Navigation';

const ForgotPassword = ({ navigation }) => {
  const [State, setState] = useState({ email: '' });

  return (
    <AuthHeader>
      <HMBack />

      <RNText pTop={hp(2)} size={FontSize.font28} family={FontFamily.Bold}>
        {'Forgot Password?'}
      </RNText>

      <RNText
        spacing={1}
        pVertical={hp(
          2,
        )}>{`No worries, we'll send you rest instructions.`}</RNText>

      <RNDevider style={{ marginBottom: hp(1) }} />

      <HMInput
        title={'Email Address*'}
        placeholder={'Enter you email'}
        value={State.email}
        onChangeText={v => setState(p => ({ ...p, email: v.trim() }))}
        keyboardType={'email-address'}
        // error={errorEmail}
      />

      <RNButton
        title={'Send Email'}
        style={{ marginTop: hp(5) }}
        onPress={() => navigation.navigate(NavRoutes.VerifyCode)}
      />
    </AuthHeader>
  );
};

export default ForgotPassword;
