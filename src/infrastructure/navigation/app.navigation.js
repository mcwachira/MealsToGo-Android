import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurants.navigator";
import MapScreen from "../../features/maps/screens/map.screens";
import { FavoriteContextProvider } from "../../services/favorites/favorites.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { SettingsNavigator } from "./settings.navigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "md-restaurant",
  Settings: "md-settings",
  Maps: "md-map",
};

const tabBarIcon = ({ size, color }) => (
  <Ionicons name={"iconName"} size={size} color={color} />
);
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const AppNavigator = () => {
  return (
    <FavoriteContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOPtions={{
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
            <Tab.Screen name="Maps" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoriteContextProvider>
  );
};

export default AppNavigator;
