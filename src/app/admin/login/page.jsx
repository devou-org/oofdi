"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../../firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login attempt with:", email);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      console.log("Signed in:", user.email);

      // Allow multiple admin emails
      const allowedAdmins = ["devou.in@gmail.com", "navaneeth0930@gmail.com"];
      if (!allowedAdmins.includes(user.email)) {
        console.log("Access denied for:", user.email);
        setMessage("Access denied: You are not the admin.");
        await auth.signOut();
        return;
      }

      console.log("Access granted, redirecting to /admin/");
      router.push("/admin/");
    } catch (err) {
      console.log("Sign in error:", err.message);
      setMessage(err.message);
    }
  };

  const handleForgotPassword = async () => {
    console.log("Forgot password for:", email);
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent to:", email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      console.log("Reset error:", err.message);
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        {message && <p className="text-red-500 mb-4">{message}</p>}
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border mb-4"
        />
        <button type="submit" className="w-full bg-[#FF1F52] text-white py-2 rounded mb-2">
          Login
        </button>
        <button type="button" onClick={handleForgotPassword} className="text-blue-500 underline">
          Forgot Password?
        </button>
      </form>
    </div>
  );
}
