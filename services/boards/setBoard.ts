import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Board } from "../../models/Board";
import { handleErrors } from "../errors/handleErrors";

export async function setBoard(board: Board) {
    try {
        const docRef = doc(db, `boards/${board.id}`);
        await setDoc(docRef, board.toJSON(), { merge: true });
    } catch (e) {
        handleErrors(e)
    }
}