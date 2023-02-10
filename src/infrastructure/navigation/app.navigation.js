import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {SafeArea} from '../../components/utils/safe-area.component'
import { RestaurantNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const Maps = () => {
    return (
        <SafeArea>
            <Text>maps</Text>
        </SafeArea>
    );
};

const Settings = () => {
    return (
        <SafeArea>
            <Text>settings</Text>
        </SafeArea>
    );
};

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
        <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOPtions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Maps" component={Maps} />
        </Tab.Navigator>
    );
};

export default AppNavigator 