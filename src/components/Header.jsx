import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_IMAGE } from "../utils/Constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // To fetch data from the redux toolkit
  const user = useSelector( store => store.user);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Performa the clean up operation after component unmount
    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      {/* <NetflixLogo netflixLogo = {netflixLogo} width={100} height={100}/> */}
      <img
        className="w-44"
        src={LOGO_IMAGE}
      />
      {user && (<div className="flex p-2">
        <img
          alt="userIcon"
          // src="https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg"
          src ={user.photoURL}
          className="w-12 h-12 px-2"
        />
        <button className="font-bold text-white" onClick={signOutButton}>Sign Out</button>
      </div>)}
    </div>
  );
};

export default Header;
