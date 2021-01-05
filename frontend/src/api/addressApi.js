import { GET_STATES } from "../utils/env";
import { fetchData } from "../utils/requests";

export const getStates = (apikey, offset, limit) => {
  if (GET_STATES) return fetchData(GET_STATES, null, apikey, offset, limit);
};
