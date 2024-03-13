import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import DrawerContent from './DrawerContent';
import { Home } from '../../Screens';

const Drawer = createDrawerNavigator();

const Index = () => {
  return (
    <Drawer.Navigator
      screenOptions={NavConfigs.drawerOptions}
      drawerContent={p => <DrawerContent {...p} />}>
      <Drawer.Screen name={NavRoutes.Home} component={Home} />
    </Drawer.Navigator>
  );
};

export default Index;
