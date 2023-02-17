import camelize from "camelize";
import { host } from "../../utils/env";
// import { locations } from "../../../functions/geocode/geocode.mock";

export const locationRequest = async (searchTerm) => {
  const res = await fetch(`${host}/geocode?city=${searchTerm}`);
  return await res.json();
};

export const locationTransform = (result) => {
  console.log(result);
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
