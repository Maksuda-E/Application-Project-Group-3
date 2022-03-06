import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReportsScreen from './screens/ReportsScreen'
import MissingPetReports from './screens/ReportsScreen/MissingPetReports';
import FoundPetReports from './screens/ReportsScreen/FoundPetReports';

const Stack = createNativeStackNavigator();

const ReportsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReportsScreen"
    >
      <Stack.Screen 
        name="ReportsNavigator"
        component={ReportsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MissingPetReports"
        component={MissingPetReports}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="FoundPetReports"
        component={FoundPetReports}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ReportsNavigator;
