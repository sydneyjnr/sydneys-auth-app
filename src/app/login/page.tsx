"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      
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
        onClick={onLogin}
      >
        Login here
      </button>
      <Link className=" font-medium hover:text-indigo-500 hover:underline hover:scale-105 transition duration-300 ease-in-out"
 href="/signup">Don't have an account? Signup here</Link>
    </div>
  );
};

export default LoginPage;
