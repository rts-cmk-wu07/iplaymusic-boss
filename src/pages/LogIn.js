import querystring from "querystring";
import { AnimatePresence, motion } from "framer-motion";
import { BsSpotify } from "react-icons/bs";
import LoginPulseFigure from "../components/figures/LoginPulseFigure";

export default function Login() {
  // get client id from environment variable
  const clientId = process.env.REACT_APP_CLIENT_ID;
  var queryParameters = querystring.stringify({
    response_type: "code",
    client_id: clientId,
    scope:
      "user-read-private user-read-email user-library-read user-library-modify user-top-read user-follow-read user-read-recently-played user-read-currently-playing user-read-playback-state user-modify-playback-state user-read-playback-position ",
    redirect_uri: "https://iplaymusik.netlify.app/callback", //"http://127.0.0.1:8888/callback",
    state: "324y732467234763284678324htr",
  });
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="w-full overflow-hidden h-screen gradient flex flex-col items-center"
      >
        <motion.div
          animate={{
            scale: [1.1, 1.2, 1.1],
            rotate: [0, -30, 0],
            y: [0, -25, 0],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="relative scale-110 -top-32 -left-4 h-[400px]"
        >
          <LoginPulseFigure />
        </motion.div>

        <div className="flex flex-col gap-8 z-40">
          <h2 className="heading text-white  text-center">iPlayMusic</h2>
          <a
            className="rounded-full border-2 border-white p-4 flex items-center justify-between gap-2 text-white text-xl"
            href={`https://accounts.spotify.com/authorize?${queryParameters}`}
          >
            Log in with spotify <BsSpotify color="#1ED760" size="26" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
