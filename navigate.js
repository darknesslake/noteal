import React from "react";

import Addjs from "./src/components/Addjs";
import Main from "./src/components/Main";
import ProfileScreen from "./src/screens/Profile";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                options={{
                title: 'Главная',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
                }}
                />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
                }}
                />
        </Stack.Navigator>
    </NavigationContainer>
}