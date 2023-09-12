import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  console.log(user);
  return (
    <div className=" w-screen absolute bg-gradient-to-b from-black  px-8 py-2 z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
        alt="netflix-logo"
      />
      {user && (
        <button onClick={handleSignOut} className="bg-red-700 p-2">
          Sign Out
        </button>
      )}
    </div>
  );
};
//className="bg-gradient-to-b from-black"
export default Header;
