import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import MainLayout from "../../components/layouts/MainLayout";
import BigHeader from "../../components/texts/BigHeader";
import { auth } from "../../lib/firebase";
import { Board } from "../../models/Board";
import { setBoard } from "../../services/boards/setBoard";
import { useMyBoards } from "../../services/boards/useMyBoards";
import { v4 } from "uuid";
import Link from "next/link";

export default function ListBoardPage() {
  const { boards, loading: boardsLoading, error: boardsError } = useMyBoards();
  const [user, loading, error] = useAuthState(auth);

  const addEmptyBoard = async () => {
    if (!user) {
      return;
    }
    await setBoard(new Board(v4(), "Untitled", user.uid));
  };

  return (
    <MainLayout>
      <>
        <div className="flex justify-between items-center gap-3">
          <BigHeader>Your Content Boards</BigHeader>
          <button onClick={addEmptyBoard} className="icon-button">
            + New board
          </button>
        </div>
        <div className="my-16">
          {boardsLoading ? (
            <div>Loading boards...</div>
          ) : boardsError ? (
            <div>Error: {boardsError.message}</div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {boards.map((board) => (
                <div
                  key={board.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                >
                  <Link href="/boards/[boardId]" as={`/boards/${board.id}`}>
                    <a className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                      <h3 className="text-xl font-medium">{board.name}</h3>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    </MainLayout>
  );
}
