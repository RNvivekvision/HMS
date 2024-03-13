import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { NavConfigs, NavRoutes } from './index';
import Drawer from './Drawer';
import { ForgotPassword, Login, ResetPassword, VerifyCode } from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        <Stack.Screen name={NavRoutes.Drawer} component={Drawer} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
