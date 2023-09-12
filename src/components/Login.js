import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const handleToggleSignIn = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg
"
          alt=""
        />
      </div>
      <form className=" w-3/12 absolute top-0  p-12 my-36 mx-auto right-0 bg-black left-0 bg-opacity-90  text-white">
        <h1 className="m-2 font-semibold text-3xl">
          {!isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            className="bg-[#333] p-3 rounded-md m-2 w-full"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="bg-[#333] p-3 rounded-md m-2 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-[#333] rounded-md p-3 m-2 w-full"
        />
        <button className="p-4 rounded-md font-serif font-bold  mx-2 my-4 bg-[#e50914;]  w-full">
          {!isSignUp ? "Sign In" : "Sign Up"}
        </button>
        {!isSignUp && (
          <div className=" mx-2 text-sm font-mono text-slate-400 flex justify-between">
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Remember me
            </label>
            <span>Need help?</span>
          </div>
        )}

        <div className="mt-16">
          <span className="text-slate-400">
            {!isSignUp ? "New to Netflix? " : "Aldready having account? "}{" "}
          </span>
          <span className="cursor-pointer" onClick={handleToggleSignIn}>
            {!isSignUp ? "Sign up now" : "Sign In"}
          </span>
          <p className="text-sm text-slate-400 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;