import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { handleErrors } from "../errors/handleErrors";
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    handleErrors(error);
  }
};
