/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import SongContext from "../../contexts/SongContext";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";

const Notification = ({ text }) => {
  const { songData } = useContext(SongContext);
  const [invalidSong, setInvalidSong] = useState(false);
  const customToastId = "custom-toast-id";
  /* eslint-disable */
  useEffect(() => {
    if (songData.preview_url === null) {
      toast(text.toString(), { toastId: customToastId });
      setInvalidSong(true);
    } else {
      setInvalidSong(false);
    }
    if (toast.isActive(customToastId)) {
      toast.dismiss(customToastId);
      setInvalidSong(false);
    }
  }, [songData]);
  /* eslint-enable */
  const styles = {
    notification: css`
      .Toastify__progress-bar {
        background: #111625;
      }
    `,
  };

  return (
    <>
      {invalidSong ? (
        <ToastContainer
          toastClassName={() =>
            "fixed mx-auto bottom-[170px] flex p-1 w-full min-h-16 rounded-md justify-between overflow-hidden cursor-pointer gradient w-[95%] ml-[-47.5%] left-[50%] z-50"
          }
          bodyClassName={() => "relative flex w-full h-full text-lg font-white font-semibold py-1 px-3"}
          rtl={false}
          pauseOnFocusLoss
          transition={Zoom}
          draggable
          pauseOnHover
          position="top"
          css={styles.notification}
          autoClose={3000}
          closeOnClick
          limit={1}
        />
      ) : null}
    </>
  );
};

export default Notification;
