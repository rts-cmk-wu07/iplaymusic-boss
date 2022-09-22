import { setCookie } from "react-use-cookie";
export function signOut({ setTokenData }) {
  setCookie("tokenData", "", { days: 0 });
  setTokenData(null);
  window.location.href = "/";
}
