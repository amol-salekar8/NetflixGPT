import React from "react";
import NetflixLogo from "../utils/NetflixLogo";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";

const Header = () => {
  const navigate = useNavigate();
  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        console.alert(error.message);
      });
  };

  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      {/* <NetflixLogo netflixLogo = {netflixLogo} width={100} height={100}/> */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <div className="flex p-2">
        <img
          alt="userIcon"
          src="https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg"
          className="w-12 h-12 px-2"
        />
        <button className="font-bold text-white" onClick={signOutButton}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
