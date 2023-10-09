import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/account");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  return (
    <div className="w-full h-screen">
      {/* 
      Background Credit: Myke Simon
      href="https://unsplash.com/photos/atsUqIm3wxo"
      myke_simon
      */}
      <img
        className=" sm:block absolute w-full h-full object-cover"
        src="myke-simon-unsplash.jpg"
        alt="Background Credit: Myke Simon"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="p-3 bg-red-300 my-2">{error}</p> : null}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 p-3 my-2 rounded"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700 p-3 my-2 rounded"
                type="password"
                placeholder="password"
                autoComplete="password"
              />
              <button className="bg-red-600 py-3 my-3 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to MovieNight?</span>{" "}
                <Link to="/signUp">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
