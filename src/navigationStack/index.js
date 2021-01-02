import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PageViewContainer from '../screens/PageView/PageViewContainer';
import DashboardContainer from '../screens/Dashboard/DashboardContainer';

const Stack = createStackNavigator();



function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'screen'} initialRouteName={'DashboardContainer'}>
        
        <Stack.Screen
            options={{ title: 'Home' }}
          name="DashboardContainer"
          component={DashboardContainer}
        />
        <Stack.Screen
          options={{ title: '' }}
          name="PageViewContainer"
          component={PageViewContainer}
        />
      
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
