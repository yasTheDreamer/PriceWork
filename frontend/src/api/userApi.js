import { fetchData } from "../utils/requests";

export const fetchDB = (url, data = null) => {
  if (url) return fetchData(url, data);
  else throw Error("url is not defined");
};
