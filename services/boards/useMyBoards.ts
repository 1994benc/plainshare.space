import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../lib/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { Board } from "../../models/Board";

export function useMyBoards(): {
    boards: Board[];
    loading: boolean;
    error: Error | null | undefined;
} {
  const [user, loading, error] = useAuthState(auth);
  const collectionRef = collection(db, "boards");
  const q = query(collectionRef, where("author", "==", user?.uid || ""));
  const [data, collLoading, collErr] = useCollection(q);

  return {
    boards: data?.docs.map((doc) => {
      const board = doc.data();
      board.id = doc.id;
      return Board.fromJSON(board);
    }) || [],
    loading: loading || collLoading,
    error: error || collErr,
  };
}
