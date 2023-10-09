import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user?.email);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
          Movie
          <span className="text-white text-xl "> NIGHT</span>
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white mr-4">{user?.email}</button>
          </Link>
          <button
            onClick={() => handleLogout()}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signIn">
            <button className="text-white mr-4">Sign In</button>
          </Link>
          <Link to="/signUp">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
