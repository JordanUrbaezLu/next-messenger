"use client";
import React from "react";

export const Content = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [signUpSuccess, setSignUpSuccess] = React.useState<
    "SUCCESS" | "FAILED" | "UNKNOWN"
  >("UNKNOWN");
  const [failedText, setFailedText] = React.useState("");

  const signUpAccount = async () => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, age }),
    });

    if (response.status === 200) {
      setSignUpSuccess("SUCCESS");
    } else {
      setFailedText(response.statusText);
      setSignUpSuccess("FAILED");
    }
  };

  return (
    <div className="p-2">
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
      <div className="pb-3">__________</div>
      <button
        className="p-2 mb-2 bg-sky-500 hover:bg-sky-700 rounded-full"
        onClick={signUpAccount}
      >
        SIGN UP
      </button>
      {signUpSuccess === "SUCCESS" && (
        <div className="text-green-600">
          Sign up was successfull for <b>{email}</b>!
        </div>
      )}
      {signUpSuccess === "FAILED" && (
        <div className="text-red-600">
          {failedText} for <b>{email}</b>!
        </div>
      )}
    </div>
  );
};

export default Content;
