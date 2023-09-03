"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Login = () => {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUserSignup = async () => {
    try {
      await supabase.auth.signUp({
        email: "beingibrahimkholil@gmail.com",
        password: "admin123",
        options: {
          emailRedirectTo: location.origin + "/auth/callback",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleUserlogin = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "beingibrahimkholil@gmail.com",
        password: "admin123",
      });
      if (error) throw error;
      router.refresh();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <button
          aria-label="Log user in"
          className={clsx(
            "relative flex w-full items-center justify-center rounded-full bg-blue-600 whitespace-nowrap px-12 py-2  tracking-wide text-white hover:opacity-90"
          )}
          onClick={handleUserSignup}
        >
          <span>Sign Up</span>
        </button>
        <button
          aria-label="Log user in"
          className={clsx(
            "relative flex w-full items-center justify-center rounded-full bg-blue-600 px-12 py-2  tracking-wide text-white hover:opacity-90",
            {
              "disabled:opacity-5 disabled:cursor-not-allowed disabled:bg-blue-400": loading,
            }
          )}
          onClick={handleUserlogin}
        >
          <span>Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
