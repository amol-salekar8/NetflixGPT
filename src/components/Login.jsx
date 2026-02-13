import React, { use, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../reduxStore/userSlice";
import { LOGIN_BACKGROUND_IMAGE, USER_AVTAR } from "../utils/Constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch();

  const toggelSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVTAR,
          }).then(() => {
              // Profile updated!
              // get the updated details from firebase 
              const { uid, email, displayName, photoURL } = auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
            }).catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " :: " + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " :: " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_BACKGROUND_IMAGE}
          alt="backgroundImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0  bg-black bg-opacity-75 text-white rounded-xl"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder=" Full Name "
            className="py-4 m-2 w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder=" Email address"
          className="py-4 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder=" Password"
          className="py-4 m-2 w-full bg-gray-700"
        />
        {errorMessage != null && (
          <p className="text-re  d-500 font-bold text-lg py-2">
            {" "}
            {errorMessage}
          </p>
        )}
        <button
          className="py-6 m-2 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 m-2 cursor-pointer " onClick={toggelSignInForm}>
          {isSignIn
            ? "New to Netflix ? Sign up now"
            : "Already have account ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
