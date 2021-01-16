import { fetchData } from "../utils/requests";

export const fetchDB = (url, factors, data = null) => {
  if (url) return fetchData(url, data, null, null, null, null, factors);
  else throw Error("url is not defined");
};

export const getToken = (url, uuid) => {
  if (uuid) url = `${url}?uuid=${uuid}`;
  if (url) return fetchData(url);
  else throw Error("url is not defined");
};
