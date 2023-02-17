import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("san Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);

    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        // console.log(result)
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  // useEffect(() => {
  //     onSearch(keyword)
  // }, [])

  const value = { location, keyword, isLoading, error, search: onSearch };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
