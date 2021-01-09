export const fetchData = (
  url,
  body = null,
  apikey = null,
  offset = null,
  limit = null,
  prefix = null,
  credentials = "include"
) => {
  if (url) {
    let headers = {};
    if (!url.includes("https://www.zipcodeapi.com/"))
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": apikey,
      };

    if (prefix) url = url + `?namePrefix=${encodeURIComponent(prefix)}`;
    if (body == null) {
      return fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: credentials,
        headers: headers,
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
