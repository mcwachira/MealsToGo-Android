import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/";
import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoriteContextProvider } from "./src/services/favorites/favorites.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Navigation from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
//firebase
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvUvBXdoDIDp4DCmIWuZ_RVKWydEAu7uM",
  authDomain: "mealstogo-97a67.firebaseapp.com",
  projectId: "mealstogo-97a67",
  storageBucket: "mealstogo-97a67.appspot.com",
  messagingSenderId: "439379393216",
  appId: "1:439379393216:web:a75f9f9a914ef36a228b25"
};

const app = initializeApp(firebaseConfig);

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
          <AuthenticationContextProvider>
          <FavoriteContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>


                  <Navigation />


              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoriteContextProvider>

          </AuthenticationContextProvider>
       
     
        </ThemeProvider>

      

      <ExpoStatusBar style="auto" />
    </>
  );
}
