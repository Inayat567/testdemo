import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigation from './src/components/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import { COLORS } from './src/constants';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
