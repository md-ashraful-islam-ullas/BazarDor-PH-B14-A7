"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Signed in successfully!");
    }

    if (error) {
      toast.error(error.message || "Invalid email or password.");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
    });

    if (error) {
      toast.error(error.message || "Google sign-in failed.");
      return;
    }
  };

  const handleGitHubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
    });

    if (error) {
      toast.error(error.message || "GitHub sign-in failed.");
      return;
    }
  };

  return (
    <div className="flex min-h-[80vh] justify-center  px-4 py-10 text-blue-950">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <fieldset className="fieldset rounded-2xl border border-blue-200 bg-white p-8 text-blue-950 shadow-xl shadow-blue-200/50">
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold text-blue-950">Welcome back</h1>
            <p className="mt-1 text-sm text-blue-800/70">
              Sign in to continue to your account
            </p>
          </div>

          <label className="label text-blue-950" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input w-full border-blue-200  text-blue-950  focus:border-blue-500 focus:outline-blue-500"
            placeholder="you@example.com"
          />

          <label className="label mt-2 text-blue-950" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="input w-full border-blue-200  text-blue-950  focus:border-blue-500 focus:outline-blue-500"
            placeholder="Enter your password"
          />

          <div className="mt-2 text-right">
            <a href="#" className="link link-hover text-sm text-blue-700">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn mt-4 w-full border-blue-700 bg-blue-700 text-white hover:border-blue-800 hover:bg-blue-800"
          >
            Sign In
          </button>

          <div className="divider text-blue-400">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn w-full border-blue-200 bg-white text-blue-950 hover:border-blue-400 hover:bg-blue-50"
          >
            Sign in with Google
          </button>

          <button
            type="button"
            onClick={handleGitHubSignIn}
            className="btn mt-2 w-full border-blue-200 bg-white text-blue-950 hover:border-blue-400 hover:bg-blue-50"
          >
            Sign in with GitHub
          </button>

          <p className="mt-4 text-center text-sm text-blue-800/70">
            Don&apos;t have an account?{" "}
            <a
              href="/sign-up"
              className="link link-hover font-semibold text-blue-700"
            >
              Sign up
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
