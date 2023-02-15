import React from "react";

import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../features/accounts/screens/account.screen";
import RegisterScreen from "../../features/accounts/screens/register.screen";
import LoginScreen from "../../features/accounts/screens/login.screen";
const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator headerShown="false">
    <Stack.Screen name="Main" component={AccountScreen} />

    <Stack.Screen name="Login" component={LoginScreen} />

    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
