import camelize from "camelize";
import { host , isMock } from "../../utils/env";
// import { locations } from "../../../functions/geocode/geocode.mock";

export const locationRequest = async (searchTerm) => {
  const res = await fetch(`${host}/geocode?city=${searchTerm}&mock={isMock}`);
  return await res.json();
};

// export const locationRequest = (searchTerm) => {
//   return fetch(
//     `http://127.0.0.1:5001/mealstogo-97a67/us-central1/geocode?city=${searchTerm}`
//   ).then((res) => {
//     console.log(`this are the results ${res}`);
//     return res.json();
//   });
// };
export const locationTransform = (result) => {
  // console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};

// return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     if (!locationMock) {
//         reject("not found");
//     }
//     resolve(locationMock);
// });
