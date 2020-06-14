import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./pages/Login";
import CpfScreen from './pages/Cpf';

const Stack =  createStackNavigator();

export default function Routes(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Cpf" component={CpfScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
