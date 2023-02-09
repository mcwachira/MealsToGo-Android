import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components/";
import { theme } from "./src/infrastructure/index";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantScreen from "./src/features/restaurant/screens/restaurant.screens";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

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
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOPtions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurant" component={RestaurantScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Maps" component={Maps} />
    </Tab.Navigator>
  );
};
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>

        <ThemeProvider theme={theme}>
              <RestaurantsContextProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>

              </RestaurantsContextProvider>
     
        </ThemeProvider>

      

      <ExpoStatusBar style="auto" />
    </>
  );
}
