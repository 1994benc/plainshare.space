import { signInWithGoogle } from "../../services/auth/signInWithGoogle";

export function LogInOptions() {
    return (
        <div className="sign-in-buttons flex flex-col gap-3 p-4 border rounded-xl">
            <h3 className="mx-1 font-medium flex gap-2 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <div>Log in options</div>
            </h3>
            <button onClick={signInWithGoogle} className="button">
                With Google
            </button>
            <button className="button">With GitHub</button>
        </div>
    );
}
