import { IoLogOutOutline } from "react-icons/io5";
import { signOut } from "../../functions/signOut";
import TokenContext from "../../contexts/TokenContext";
import { useContext } from "react";
const SignoutButton = () => {
  const { setTokenData } = useContext(TokenContext);
  return (
    <button
      className="rounded-full border-2 border-additional dark:border-white px-10 py-2 flex items-center justify-between gap-2 text-3xl w-fit mx-auto"
      onClick={() => {
        signOut({ setTokenData });
      }}
    >
      Sign out
      <IoLogOutOutline className="text-4xl " />
    </button>
  );
};

export default SignoutButton;
