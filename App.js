import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/";
import { theme } from "./src/infrastructure/theme/index";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoriteContextProvider } from "./src/services/favorites/favorites.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Navigation from "./src/infrastructure/navigation";


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
        <FavoriteContextProvider>
          <LocationContextProvider>
          <RestaurantsContextProvider>

            <NavigationContainer>
              <Navigation />
            </NavigationContainer>

          </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoriteContextProvider>
    
     
        </ThemeProvider>

      

      <ExpoStatusBar style="auto" />
    </>
  );
}
