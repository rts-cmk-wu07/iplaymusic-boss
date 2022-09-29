/* eslint-disable */

import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { setCookie } from "react-use-cookie";
import LoaderModal from "../components/modals/LoaderModal";
import ThemeToggle from "../components/buttons/ThemeToggle";
import axios from "axios";
/* Context */
import TokenContext from "../contexts/TokenContext";
import loaderModalContext from "../contexts/loaderModalContext";

export default function Callback() {
  const navigate = useNavigate();
  const { loaderModal, setLoaderModal } = useContext(loaderModalContext);
  setLoaderModal(true);
  // Get url params
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  // Get tokenData from context
  const { setTokenData } = useContext(TokenContext);

  // Post request to get access & refresh_token
  useEffect(() => {
    axios
      .post(
        "https://iplaymusik.netlify.app/.netlify/functions/token",
        JSON.stringify({
          code,
          state,
        })
      )
      .then((response) => {
        // Saving the needed res data in object
        const resData = {
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
          expiratedDate: new Date().getTime() + response.data.expires_in * 1000,
        };
        // Set tokenData in context and cookie
        setTokenData(resData);
        setCookie("tokenData", JSON.stringify(resData));
        navigate("/");
      });
  }, []);

  return (
    <div>
      {loaderModal && <LoaderModal />}
      <div className="hidden">
        <ThemeToggle />
      </div>
    </div>
  );
}
