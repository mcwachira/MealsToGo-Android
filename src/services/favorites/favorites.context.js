import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const { user } = useContext(AuthenticationContext);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing ", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error fetching ", e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    // const index = favorites.findINdex(restaurant)

    // return favorites.splice(index, 1)

    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  //load favorites stored in storage
  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]);

  //save to storage every time the favorites array changes
  useEffect(() => {
      if (user && user.uid && favorites.length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  const value = {
    favorites,
    addToFavorites: add,
    removeFromFavorites: remove,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
