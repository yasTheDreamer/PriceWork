import { GET_STATES, GET_JOBS, GET_CITIES, GET_ZIPCODES } from "../utils/env";
import { fetchData } from "../utils/requests";

export const getStates = (apikey, offset, limit, prefix) => {
  if (GET_STATES)
    return fetchData(GET_STATES, null, apikey, offset, limit, prefix);
};

export const getCities = (apikey, state, prefix) => {
  let url = null;

  if (GET_CITIES && state)
    url = `${GET_CITIES}/${encodeURIComponent(state)}/cities`;

  return fetchData(url, null, apikey, null, null, prefix);
};

export const getZipCodes = (state, city) => {
  let url = null;

  if (state && city) url = `${GET_ZIPCODES}/${city}/${state}`;

  if (url) return fetchData(url, null, null, null, null, null, null, "omit");
};

export const getJobs = (prefix) => {
  let url = null;
  if (GET_JOBS && prefix) {
    url = `${GET_JOBS}=${encodeURIComponent(prefix)}`;

    if (url) return fetchData(url, null, null, null, null, null, null, "omit");
  }
};
