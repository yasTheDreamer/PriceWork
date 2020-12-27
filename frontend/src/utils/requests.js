export const fetchData = (url, body = null) => {
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
