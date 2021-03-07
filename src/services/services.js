const convertNetworkError = err => {
  console.log("fail");
  return {
    code: "NETWORK-ERROR",
    err
  };
};

const convertServiceError = err => Promise.reject(err);
export const fetchLoginStatus = username => {
  return fetch("/session", {
    method: "GET"
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const fetchLogin = username => {
  return fetch("/session", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({ username })
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const fetchLogout = () => {
  return fetch("/session", {
    method: "DELETE"
  })
    .catch(convertNetworkError)
    .then(response => {
      return response.ok;
    });
};

export const fetchTransactionList = () => {
  return fetch("/transactions", {
    method: "GET"
  })
    .catch(convertNetworkError)
    .then(response => {
      //when happens error
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const removeTransaction = id => {
  return fetch("/transaction", {
    method: "DELETE",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({ id })
  })
    .catch(convertNetworkError)
    .then(response => {
      if (!response.ok) {
        return response.json().then(convertServiceError);
      }
      return response.json();
    });
};

export const clearTransactions = () => {
  return fetch("/cleartransactions").then(response => {
    if (!response.ok) {
      return response.json().then(convertServiceError);
    }
    return response.json();
  });
};

export const addTransaction = transaction => {
  return fetch("/transaction", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({ transaction })
  })
    .catch(convertNetworkError)
    .then(response => response.json());
};
