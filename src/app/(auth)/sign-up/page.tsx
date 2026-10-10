"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (data) {
      toast.success("Signed Up successfully!");
      redirect("/");
    }

    if (error) {
      toast.error(error.message || "Invalid email or password.");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    // console.log(data);
  };

  return (
    <div className="flex min-h-[80vh] justify-center px-4 py-10 text-blue-950">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-2xl border border-blue-200 bg-white p-8 text-blue-950 shadow-xl shadow-blue-200/50">
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold text-blue-950">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-blue-800/70">
              Fill in the details below to get started
            </p>
          </div>

          <label className="label text-blue-950" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input w-full border-blue-200 text-blue-950 focus:border-blue-500 focus:outline-blue-500"
            placeholder="Your full name"
          />

          <label className="label mt-2 text-blue-950" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input w-full border-blue-200 text-blue-950 focus:border-blue-500 focus:outline-blue-500"
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
            className="input w-full border-blue-200 text-blue-950 focus:border-blue-500 focus:outline-blue-500"
            placeholder="Create a password"
          />

          <button
            className="btn mt-6 w-full border-blue-700 bg-blue-700 text-white hover:border-blue-800 hover:bg-blue-800"
            type="submit"
          >
            Sign Up
          </button>
          <div className="divider text-blue-400">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn w-full border-blue-200 bg-white text-blue-950 hover:border-blue-400 hover:bg-blue-50"
          >
            Sign up with Google
          </button>

          <button
            type="button"
            onClick={handleGitHubSignIn}
            className="btn mt-2 w-full border-blue-200 bg-white text-blue-950 hover:border-blue-400 hover:bg-blue-50"
          >
            Sign up with GitHub
          </button>

          <p className="mt-4 text-center text-sm text-blue-800/70">
            Already have an account?{" "}
            <a
              href="/sign-in"
              className="link link-hover font-semibold text-blue-700"
            >
              Log in
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
