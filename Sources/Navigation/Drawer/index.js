import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import DrawerContent from './DrawerContent';
import { Business, Products, Users } from '../../Screens';

const Drawer = createDrawerNavigator();

const Index = () => {
  return (
    <Drawer.Navigator
      screenOptions={NavConfigs.drawerOptions}
      drawerContent={p => <DrawerContent {...p} />}>
      <Drawer.Screen name={NavRoutes.Users} component={Users} />
      <Drawer.Screen name={NavRoutes.Business} component={Business} />
      <Drawer.Screen name={NavRoutes.Products} component={Products} />
    </Drawer.Navigator>
  );
};

export default Index;
