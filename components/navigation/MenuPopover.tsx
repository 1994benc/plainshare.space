import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import { LogInOptions } from "./LogInOptions";
import { LogOutOptions } from "./LogOutOptions";

export function MenuPopover() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Popover className="relative">
      <Popover.Button className="icon-button">
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute text-2xl z-10 bg-gray-100 rounded-xl shadow-xl p-6 right-0 sm:right-4 sm:w-96 w-screen">
          <div>
            {!user && <LogInOptions></LogInOptions>}
            {user && <LogOutOptions></LogOutOptions>}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
