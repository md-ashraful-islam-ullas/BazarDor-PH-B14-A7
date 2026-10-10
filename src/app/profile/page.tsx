"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [show, setShow] = useState(false);

  const handleUpdateuser = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries()) as { name: string };

    const { error } = await authClient.updateUser({
      ...newUser,
    });

    if (error) {
      toast.error(error.message || "Failed to update name.");
      return; // keep the form open so they can retry
    }

    toast.success("Name updated successfully");
    setShow(false);
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] justify-center bg-blue-50/70 px-4 py-10 sm:px-6 sm:py-14">
      <div className="card h-fit w-full max-w-md overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg shadow-blue-100/50">
        <div className="card-body gap-5 p-5 sm:p-8">
          <div className="flex flex-col items-center text-center">
            {user?.image && (
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring-4 ring-blue-100 ring-offset-2">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            )}

            <h1 className="text-2xl font-bold text-blue-950">{user?.name}</h1>
            <p className="mt-1 text-sm text-slate-500">{user?.email}</p>
          </div>

          <div className="divider my-1 before:bg-blue-100 after:bg-blue-100" />

          <div className="space-y-5">
            <div className="rounded-xl border border-blue-50 bg-blue-50/50 p-4">
              <p className="mb-1 text-sm text-slate-500">Name</p>
              <p className="font-semibold text-slate-800">{user?.name}</p>
            </div>

            <div className="rounded-xl border border-blue-50 bg-blue-50/50 p-4">
              <p className="mb-1 text-sm text-slate-500">Email</p>
              <p className="break-all font-semibold text-slate-800">
                {user?.email}
              </p>
            </div>

            <div className="rounded-xl border border-blue-50 bg-blue-50/50 p-4">
              <p className="mb-2 text-sm text-slate-500">Email Status</p>
              {user?.emailVerified ? (
                <span className="badge badge-success border-0 px-3 py-3 font-medium">
                  Verified
                </span>
              ) : (
                <span className="badge badge-warning border-0 px-3 py-3 font-medium">
                  Not Verified
                </span>
              )}
            </div>

            <div className="rounded-xl border border-blue-50 bg-blue-50/50 p-4">
              <p className="mb-1 text-sm text-slate-500">Member Since</p>
              <p className="font-semibold text-slate-800">
                {user?.createdAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="divider my-1 before:bg-blue-100 after:bg-blue-100" />

          <button
            type="button"
            onClick={handleShowForm}
            className="btn w-full rounded-xl border-blue-600 bg-blue-600 text-white shadow-sm hover:border-blue-700 hover:bg-blue-700"
          >
            {show ? "Cancel" : "Change Name"}
          </button>

          {show && (
            <form onSubmit={handleUpdateuser} className="mt-2 space-y-3">
              <label
                className="block text-sm font-semibold text-blue-950"
                htmlFor="name"
              >
                Change Name
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={user?.name}
                  className="input h-12 w-full rounded-xl border-blue-200 bg-white px-4 text-slate-800 outline-none focus:border-blue-500 focus:outline-2 focus:outline-blue-200"
                  placeholder="Enter your name"
                />

                <button
                  type="submit"
                  className="btn h-12 rounded-xl border-blue-950 bg-blue-950 px-6 text-white hover:border-blue-800 hover:bg-blue-800"
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
