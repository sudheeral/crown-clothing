// import { userEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up";

import {
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

import "./sign-in.scss";

const SignIn = () => {
  // userEffect(async () => {
  //   const response = await getRedirectResult();

  //   if (response) {
  //     const userDocRef = createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <button onClick={logGooglePopupUser}>Signin with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Signin with Google Redirect
      </button> */}
      <SignUp />
    </div>
  );
};

export default SignIn;
