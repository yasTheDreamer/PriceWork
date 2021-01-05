export const fetchData = (
  url,
  body = null,
  apikey = null,
  offset = null,
  limit = null
) => {
  if (url) {
    console.log(url);
    if (body == null) {
      return fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key": apikey,
          offset: offset,
          limit: limit,
        },
      })
        .then((res) => {
          return res.clone().json();
        })
        .then((d) => {
          return d;
        })
        .catch((err) => {
          throw err;
        });
    } else {
      return fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          throw err;
        });
    }
  }
};
