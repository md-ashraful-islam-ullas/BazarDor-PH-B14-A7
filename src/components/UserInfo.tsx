
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
  const { error } = await authClient.signOut();

  if (error) {
    toast.error(error.message || "Sign out failed.");
    return;
  }

  toast.success("Signed out successfully");
  router.replace("/sign-up");
  router.refresh();
};

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          <Link href="/profile">
            <p className="btn btn-sm sm:btn-md rounded-lg border-blue-200 bg-white px-3 whitespace-nowrap text-blue-700 hover:bg-blue-50 sm:px-5">
              {user.name}
            </p>
          </Link>

          <button
            onClick={handleSignOut}
            className="btn btn-sm sm:btn-md rounded-lg border-0 bg-blue-500 px-3 whitespace-nowrap text-white hover:bg-blue-600 sm:px-5"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <button className="btn btn-sm sm:btn-md rounded-lg border-blue-200 bg-white px-3 whitespace-nowrap text-blue-700 hover:bg-blue-50 sm:px-5">
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="btn btn-sm sm:btn-md rounded-lg border-0 bg-blue-500 px-3 whitespace-nowrap text-white hover:bg-blue-600 sm:px-5">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
