import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { handleErrors } from "../errors/handleErrors";

export const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(
      auth,
      new GoogleAuthProvider()
    );
    return userCredential.user;
  } catch (error) {
    handleErrors(error);
  }
};
