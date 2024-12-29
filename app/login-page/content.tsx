"use client";

import React, { useState } from "react";
import Image from "next/image";

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

  const validateForm = () => {
    if (!email.includes("@")) {
      setError("Invalid email address.");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const Login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login valid!");
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
    }
  };

  const forgotPassword = () => {
    if (!email) {
      setError("Please enter your email to reset the password.");
    } else {
      setError("");
      alert(`Password reset instructions sent to ${email}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <form
        onSubmit={(e) => Login(e)}
        className="relative grid place-items-center bg-red-300 p-8 rounded shadow-lg max-w-sm w-[600px] h-[510px]"
      >
        <Image
          src="https://as1.ftcdn.net/v2/jpg/02/22/45/86/1000_F_222458695_vF59wjurKaSQ1TchnTdRSr8dJRbUq4nc.jpg"
          alt="Incoming Mail"
          width={50}
          height={50}
          className="absolute top-1 left-1"
        />
        <h1 className="text-xl font-bold mb-4">Next-Messenger</h1>
        <h2 className="text-l font-bold mb-4 absolute bottom-11 ">
          get the app
        </h2>
        <div className="w-full mb-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="block w-full p-2 border rounded"
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="block w-full p-2 border rounded"
          />
        </div>
        <div className="w-full mb-4">
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
            aria-label="Login button"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
          <button
            type="button"
            onClick={forgotPassword}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Forgot Password
          </button>
        </div>
        <div className="flex justify-between w-full mt-4">
          <button
            type="button"
            className="text-black px-1 py-2 rounded hover:bg-blue-300 relative -top-5"
          >
            Create Account
          </button>
          <button
            type="button"
            className="text-black px-1 py-2 rounded hover:bg-blue-300 relative -top-5"
          >
            Privacy Policy
          </button>
        </div>
        <button
          type="button"
          className="flex items-center space-x-2 text-black px-3 py-2 rounded hover:bg-blue-100 mt-4"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Icon"
            className="w-5 h-5"
          />
          <span>Sign in using Google</span>
        </button>
      </form>
    </div>
  );
}

export default App;
