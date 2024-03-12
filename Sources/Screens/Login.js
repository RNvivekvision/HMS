import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AuthHeader, RememberMe } from '../Components';
import { HMInput, RNButton, RNDevider, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp } from '../Theme';
import { Images } from '../Constants';
import { NavRoutes } from '../Navigation';

const Login = ({ navigation }) => {
  const [State, setState] = useState({
    email: '',
    password: '',
    passwordSecure: true,
  });
  const passwordRef = useRef();

  return (
    <AuthHeader>
      <RNText pTop={hp(2)} size={FontSize.font28} family={FontFamily.Bold}>
        {'Sign in to your account'}
      </RNText>

      <RNText spacing={1} pVertical={hp(2)}>{`Let's get started`}</RNText>

      <RNDevider style={{ marginBottom: hp(1) }} />

      <HMInput
        title={'Email Address*'}
        placeholder={'Enter you email'}
        value={State.email}
        onChangeText={v => setState(p => ({ ...p, email: v.trim() }))}
        keyboardType={'email-address'}
        onSubmitEditing={() => passwordRef.current.focus()}
        // error={errorEmail}
      />

      <HMInput
        ref={passwordRef}
        title={'Password*'}
        returnKeyType={'done'}
        placeholder={'Enter you password'}
        value={State.password}
        onChangeText={v => setState(p => ({ ...p, password: v }))}
        secureTextEntry={State.passwordSecure}
        icon={State.passwordSecure ? Images.Show : Images.Hide}
        onIconPress={() =>
          setState(p => ({ ...p, passwordSecure: !p.passwordSecure }))
        }
      />

      <RememberMe onPress={isRemember => console.log({ isRemember })}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavRoutes.ForgotPassword)}
          activeOpacity={0.6}>
          <RNText size={FontSize.font14} color={Colors.Button}>
            {'Forgot Password?'}
          </RNText>
        </TouchableOpacity>
      </RememberMe>

      <RNButton title={'Login'} />
    </AuthHeader>
  );
};

export default Login;