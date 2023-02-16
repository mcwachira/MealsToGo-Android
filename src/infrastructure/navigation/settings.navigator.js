import React, { useEffect } from "react";
import { Text } from "react-native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/screens/settings.screens";
import FavoritesScreen from "../../features/settings/screens/favorites.screen";
import CameraScreen from "../../features/settings/screens/camera.screens";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        //cardStyleInterpolator:cardStyleInterpolator
        ...TransitionPresets.forRevealFromBottomAndroid,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
   
    </SettingsStack.Navigator>
  );
};
