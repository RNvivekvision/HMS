import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNHeader, RNIcon, RNImage, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { HMDropDown, HMEntity, HMInput, HMSearchEntity } from '../Components';
import { Images } from '../Constants';
import { DummyData } from '../Utils';

const AddNewUser = ({ navigation }) => {
  const confirmPasswordRef = useRef();
  const [State, setState] = useState({
    language: null,
    password: '',
    confirmPassword: '',
    passwordSecure: true,
    confirmPasswordSecure: true,
  });

  return (
    <RNHeader style={{ paddingHorizontal: wp(4) }} title={'Add New User'}>
      <View style={RNStyles.flexRowBetween}>
        <RNText size={FontSize.font18} family={FontFamily.SemiBold}>
          {'Add New User'}
        </RNText>
        <TouchableOpacity style={RNStyles.flexRow}>
          <RNImage source={Images.Reset} style={RNStyles.icon} />
          <RNText color={Colors.Button} pLeft={wp(1)} textLine={'underline'}>
            {'Reset'}
          </RNText>
        </TouchableOpacity>
      </View>

      <HMInput title={'Login*'} placeholder={'Peter'} />
      <HMInput title={'Full Name*'} placeholder={'Peter Parker'} />
      <HMInput title={'Short Name*'} placeholder={'PP1'} />
      <HMInput title={'Email'} placeholder={'peterparker07'} />
      <HMDropDown
        title={'Language'}
        data={DummyData.UserProfile.Languages}
        placeholder={'Please Select'}
        onChange={value => setState(p => ({ ...p, language: value }))}
        value={State.language}
      />

      <RNText
        size={FontSize.font18}
        pVertical={hp(0.5)}
        family={FontFamily.SemiBold}>
        {'Security'}
      </RNText>

      <HMInput
        title={'Password*'}
        returnKeyType={'done'}
        placeholder={'********'}
        value={State.password}
        onChangeText={v => setState(p => ({ ...p, password: v }))}
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
        secureTextEntry={State.passwordSecure}
        icon={State.passwordSecure ? Images.Show : Images.Hide}
        onIconPress={() =>
          setState(p => ({ ...p, passwordSecure: !p.passwordSecure }))
        }
      />

      <HMInput
        ref={confirmPasswordRef}
        title={'Re-enter Password*'}
        returnKeyType={'done'}
        placeholder={'********'}
        value={State.confirmPassword}
        onChangeText={v => setState(p => ({ ...p, confirmPassword: v }))}
        secureTextEntry={State.confirmPasswordSecure}
        icon={State.confirmPasswordSecure ? Images.Show : Images.Hide}
        onIconPress={() =>
          setState(p => ({
            ...p,
            confirmPasswordSecure: !p.confirmPasswordSecure,
          }))
        }
      />

      <RNText pTop={hp(2)} color={Colors.Placeholder}>
        {'Profile Photo'}
      </RNText>
      <TouchableOpacity activeOpacity={0.6} style={styles.profilePicContainer}>
        <RNText family={FontFamily.Bold} size={FontSize.font30}>
          {'PPs'}
        </RNText>
        <RNIcon
          icon={Images.UpdateProfilePic}
          containerStyle={styles.profilePicIcon}
          iconStyle={RNStyles.image60}
        />
      </TouchableOpacity>

      <RNText
        size={FontSize.font18}
        pVertical={hp(0.5)}
        family={FontFamily.SemiBold}>
        {'Add Entities & Rights'}
      </RNText>

      <HMEntity
        data={[{ title: 'HMS AG', text: 'Accounts User, Ops Admin' }]}
      />

      <HMSearchEntity />
    </RNHeader>
  );
};

const picSize = wp(30);
const styles = StyleSheet.create({
  profilePicContainer: {
    ...RNStyles.center,
    width: picSize,
    height: picSize,
    borderWidth: 1,
    borderRadius: 100,
    marginVertical: hp(1),
    borderWidth: wp(0.3),
    borderColor: Colors.Button,
    backgroundColor: Colors.PlaceholderBackground,
  },
  profilePicIcon: {
    borderRadius: 100,
    backgroundColor: Colors.Button,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default AddNewUser;