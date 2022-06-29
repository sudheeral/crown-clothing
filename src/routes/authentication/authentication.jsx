// import { userEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";

import // signInWithGoogleRedirect,
"../../utils/firebase";

import "./authentication.scss";

const Authentication = () => {
  // userEffect(async () => {
  //   const response = await getRedirectResult();

  //   if (response) {
  //     const userDocRef = createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={logGooglePopupUser}>Signin with Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Signin with Google Redirect
      </button> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
