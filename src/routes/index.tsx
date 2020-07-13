import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Guideline from '../pages/Guideline';
import IntroductionFirst from '../pages/IntroductionFirst';

const Navigate = createStackNavigator();

const NavigateRoutes: React.FC = () => (
  <Navigate.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#00B38660' },
    }}
  >
    <Navigate.Screen name="Guideline" component={Guideline} />
    <Navigate.Screen name="IntroductionFirst" component={IntroductionFirst} />
  </Navigate.Navigator>
);

export default NavigateRoutes;
