import React, {useState} from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

export default function App() {
  let [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontLoaded){
    return <AppLoading />
  } else {
    return (
      <MealsNavigator />
    );
  }
}
