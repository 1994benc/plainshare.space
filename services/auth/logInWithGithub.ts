import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { handleErrors } from "../errors/handleErrors";

export const logInWithGitHub = async () => {
  try {
    const userCredential = await signInWithPopup(
      auth,
      new GithubAuthProvider()
    );
    return userCredential.user;
  } catch (error) {
    handleErrors(error);
  }
};
