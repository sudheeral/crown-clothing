import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import "./sign-in.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in</h1>
      <button onClick={logGoogleUser}>Signin with Google Popup</button>
    </div>
  );
};

export default SignIn;
