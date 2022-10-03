// Methods supported [PATCH, DELETE, POST, GET]

import { useEffect, useState, useContext } from "react";
import TokenContext from "../contexts/TokenContext";
import { default as refreshTokenFunction } from "../functions/refreshToken";

export default function useDynamicFetch({ url, method, data }) {
  const [fetchData, setFetchData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get token from context
  const { tokenData, setTokenData } = useContext(TokenContext);
  // Deconstructing to get both tokens individually
  const { accessToken } = tokenData;

  useEffect(
    function () {
      // if there is no token, return
      if (!accessToken) return;
      if (!url) return;
      //refreshTokenFunction(setTokenData);

      if (url) {
        // Dette er en IIFE (immediately invoked function expression)
        (async function () {
          const response = await fetch(url, {
            method: method,
            headers: {
              authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: data !== null ? JSON.stringify(data) : null,
          });
          // if successful, set data and loading to false
          if (response.status >= 200 && response.status < 300) {
            const json = await response.json();
            setFetchData(json);
            setLoading(false);
          } else {
            console.log(response);
            // if unsuccessful, set error
            setError(response.status);
          }
        })();
      }
    },
    [url, data, method]
  );

  return { fetchData, loading, error };
}
