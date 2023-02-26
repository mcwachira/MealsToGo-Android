// import { mocks, mockImages } from "../../../functions/places/mock";
import camelize from "camelize";
import { host } from "../../utils/env";
export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  const res = await fetch(`${host}/placesNearBy?location=${location}`);
  return await res.json();
  //use async await
  // return new Promise((resolve, reject) => {
  //   const mock = mocks[location];
  //   if (!mock) {
  //     reject("not found");
  //   }
  //   resolve(mock);
  // });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResults);
};
