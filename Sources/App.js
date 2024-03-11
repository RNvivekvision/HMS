import React, { useEffect } from 'react';
import { Routes } from './Navigation';
import { Text, View } from 'react-native';
import { FontFamily } from './Theme';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // return <Routes />;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 24,
          color: '#000',
          fontFamily: FontFamily.Thin,
        }}>
        {'Hello World'}
      </Text>
    </View>
  );
};

export default App;
