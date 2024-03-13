import { TransitionPresets } from '@react-navigation/stack';
import { Colors } from '../Theme';
const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
const drawerOptions = {
  ...screenOptions,
  drawerType: 'front',
  drawerStyle: {
    backgroundColor: 'transparent',
    width: '80%',
  },
  overlayColor: Colors.White + '80',
};
const NavConfigs = {
  screenOptions,
  drawerOptions,
};
export default NavConfigs;
