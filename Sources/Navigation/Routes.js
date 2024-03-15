import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { NavConfigs, NavRoutes } from './index';
import Drawer from './Drawer';
import {
  AddNewUser,
  BusinessDetail,
  EditProfile,
  ForgotPassword,
  Login,
  ResetPassword,
  UserProfile,
  VerifyCode,
} from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        {/* Authentication */}
        <Stack.Screen name={NavRoutes.Login} component={Login} />
        <Stack.Screen
          name={NavRoutes.ForgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen name={NavRoutes.VerifyCode} component={VerifyCode} />
        <Stack.Screen
          name={NavRoutes.ResetPassword}
          component={ResetPassword}
        />

        {/* Application */}
        <Stack.Screen name={NavRoutes.Drawer} component={Drawer} />
        <Stack.Screen name={NavRoutes.UserProfile} component={UserProfile} />
        <Stack.Screen name={NavRoutes.AddNewUser} component={AddNewUser} />
        <Stack.Screen name={NavRoutes.EditProfile} component={EditProfile} />
        <Stack.Screen
          name={NavRoutes.BusinessDetail}
          component={BusinessDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
