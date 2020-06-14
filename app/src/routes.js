import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./pages/Login";

const Stack =  createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
