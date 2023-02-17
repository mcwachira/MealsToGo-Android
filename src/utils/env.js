const live = "https://us-central1-mealstogo-97a67.cloudfunctions.net";
const local = "http://127.0.0.1:5001/mealstogo-97a67/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = live;
