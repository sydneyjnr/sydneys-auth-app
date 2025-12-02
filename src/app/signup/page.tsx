"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-500 hover:shadow-lg active:bg-indigo-700 transition duration-300 ease-in-out"
        onClick={onSignup}
      >
        Signup here
      </button>
      <Link className=" font-medium hover:text-indigo-500 hover:underline hover:scale-105 transition duration-300 ease-in-out"
 href="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default SignupPage;




