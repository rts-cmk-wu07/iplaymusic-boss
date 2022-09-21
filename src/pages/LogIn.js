import querystring from "querystring";
import { motion } from "framer-motion";
import { BsSpotify } from "react-icons/bs";
import LoginDecorationFigure from "../components/figures/LoginDecorationFigure";
export default function Login() {
  // get client id from environment variable
  const clientId = process.env.REACT_APP_CLIENT_ID;
  var queryParameters = querystring.stringify({
    response_type: "code",
    client_id: clientId,
    scope: "user-read-private user-read-email",
    redirect_uri: "http://127.0.0.1:8888/callback",
    state: "324y732467234763284678324htr",
  });
  return (
    <div className="w-full overflow-hidden h-screen gradient dark:bg-additional flex flex-col items-center">
      <div className="relative -top-32 -left-4 h-1/2">
        <LoginDecorationFigure />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="heading text-white">iPlayMusic</h2>
        <a
          className="rounded-xl border-2 border-white p-3 flex items-center justify-between text-white"
          href={`https://accounts.spotify.com/authorize?${queryParameters}`}
        >
          Log in with spotify <BsSpotify color="#1ED760" size="25" />
        </a>
      </div>
    </div>
  );
}
