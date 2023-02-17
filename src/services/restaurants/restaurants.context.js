import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import {
  restaurantsTransform,
  restaurantsRequest,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  // console.log(restaurants)
  // const value ={

  // }
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
