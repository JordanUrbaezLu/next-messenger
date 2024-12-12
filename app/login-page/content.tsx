"use client";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="relative grid place-items-center bg-purple-300 p-8 rounded shadow-lg w-[400px] h-[500px]">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/22/45/86/1000_F_222458695_vF59wjurKaSQ1TchnTdRSr8dJRbUq4nc.jpg"
          alt="Incoming Mail"
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />
        <h1>Login</h1>
        <div className="email validation">
          Email:
          <input
            id="email"
            type="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="block mt-1 p-1 border rounded"
          />
        </div>
        <div className="mt-2">
          Password:
          <input type="password" className="block mt-1 p-1 border rounded" />
        </div>
        <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">
          Login
        </button>
        <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">
          forgot password
        </button>
      </form>
    </div>
  );
}

export default App;
