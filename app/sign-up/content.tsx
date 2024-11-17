"use client";
import React from "react";

export const Content = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");
  const createAccount = () => {
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, age }),
    });
  };

  return (
    <>
      <div>NAME</div>
      <input
        className="bg-gray-300"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>AGE</div>
      <input
        type="number"
        min="1"
        step="1"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="bg-gray-300"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <div>EMAIL</div>
      <input
        type="email"
        className="bg-gray-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={createAccount}>CREATE ACCOUNT</button>
    </>
  );
};

export default Content;
