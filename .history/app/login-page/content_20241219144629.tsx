"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("passrd", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
    alert("Logged in sucessfully!");
  };

  const validateForm = () => {
    if (!email.includes("@")) {
      setError("Invalid email address");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      alert("please enter valid password");
      return false;
    }
    setError("");
    return true;
  };
  const Login = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleLogin(e);
    } else {
      alert("Please enter valid email address or password");
    }
  };
  const ForgotPassword = () => {
    if (!email) {
      alert("Please enter your email to reset the password");
    } else {
      alert(`Password reset instructions sent to ${email}`);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={Login}
        className="relative grid place-items-center bg-red-300 p-8 rounded shadow-lg w-[400px] h-[500px]"
      >
        <Image
          src="https://as1.ftcdn.net/v2/jpg/02/22/45/86/1000_F_222458695_vF59wjurKaSQ1TchnTdRSr8dJRbUq4nc.jpg"
          alt="Incoming Mail"
          width={50}
          height={50}
          style={{
            position: "absolute",
            top: 2,
            left: 2,
          }}
        />
        <h1 className="text-xl font-bold mb-1">Next-Messenger</h1>
        <div className="w-full mb-1">
          {error}
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 border rounded"
          />
        </div>
        <div className="w-full mb-1">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border rounded"
          />
        </div>
        <div className="w-full mb-1">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            Remember Me
          </label>
        </div>
        <div className="space-y-2">
          <button
            type="submit"
            onClick={Login}
            className="w-full bg-green-500 text-white px-1 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
          <button
            type="button"
            onClick={ForgotPassword}
            className="w-full bg-blue-500 text-black px-0 py-0 rounded hover:bg-gray-600"
          >
            Forgot Password
          </button>
          <Link href="http://localhost:3001/sign-up"></Link>
          <button
            type="button"
            onClick={() =>
              (window.location.href = "http://localhost:3001/sign-up")
            }
            className="absolute bottom-0 left-0  text-black px-2 py-1 rounded hover:bg-blue-300"
          >
            Create Account
          </button>
          <button
            type="button"
            className="absolute bottom-0 right-0  text-black px-2 py-1 rounded hover:bg-blue-300"
          >
            Privacy Policy
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
