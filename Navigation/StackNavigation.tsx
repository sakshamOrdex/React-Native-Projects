import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import SignupScreen from '../Screens/SignUp';
import WelcomeScreen from '../Screens/Welcome';


export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Signup: undefined;
    Dashboard: {
        email?: string;
        name?: string;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>()
export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={WelcomeScreen}
            />
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='Dashboard'
                component={Dashboard}
            />
            <Stack.Screen
                name='Signup'
                component={SignupScreen}
            />
        </Stack.Navigator>
    )
}