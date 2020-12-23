export const fetchData = (url, body = undefined) => {
  let result = null;

  if (url) {
    console.log(url);
    if (body == undefined) {
      fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((d) => {
          result = d;
        })
        .catch((err) => {
          throw err;
        });
    } else {
      fetch(url, {
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
          return res.json();
        })
        .then((d) => {
          result = d;
          console.log(result);
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  return result;
};
