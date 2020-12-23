import { fetchData } from "../utils/requests";

export const fetchDB = (url, data) => {
  if (url) fetchData(url, data);
  else throw Error("url is not defined");
};
