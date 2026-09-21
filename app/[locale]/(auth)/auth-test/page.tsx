"use client";

import { authClient } from "@/lib/auth-client";

export default function AuthTestPage() {
  async function handleSignUp() {
    const { data, error } =
      await authClient.signUp.email({
        name: "Test User",
        email: "test@example.com",
        username: "testuser",
        password: "testpassword123",
      });

    console.log("SIGN UP DATA:", data);
    console.log("SIGN UP ERROR:", error);
  }

    async function handleSignUpUsername() {
    const { data, error } =
      await authClient.signUp.email({
        name: "Pham Quoc Tuan",
        email: "phquoctuan@gmail.com",
        username: "phquoctuan",
        password: "phquoctuan@2020",
      });

    console.log("SIGN UP DATA:", data);
    console.log("SIGN UP ERROR:", error);
  }

  async function handleSignInUsername() {
  const { data, error } =
    await authClient.signIn.username({
      username: "testuser",
      password: "testpassword123",
    });

  console.log("SIGN IN USERNAME DATA:", data);
  console.log("SIGN IN USERNAME ERROR:", error);
}

  async function handleSignInEmail() {
  const { data, error } =
    await authClient.signIn.email({
      email: "test@example.com",
      password: "testpassword123",
    });

  console.log("SIGN IN USERNAME DATA:", data);
  console.log("SIGN IN USERNAME ERROR:", error);
}

  return (
    <div className="p-8">
        <button
            type="button"
            onClick={handleSignUp}
            className="rounded border px-4 py-2"
        >
            Test Sign Up
        </button>
        <button
            type="button"
            onClick={handleSignUpUsername}
            className="rounded border px-4 py-2"
        >
            Test phquoctuan@gmail.com
        </button>
        <button
            type="button"
            onClick={handleSignInUsername}
            className="rounded border px-4 py-2"
            >
            Test Sign In Username
        </button>
        <button
            type="button"
            onClick={handleSignInEmail}
            className="rounded border px-4 py-2"
            >
            Test Sign In Email
        </button>
    </div>
  );
}