import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        {/* 
        Background Credit: Myke Simon
        href="https://unsplash.com/photos/atsUqIm3wxo"
        myke_simon
       */}
        <img
          className="w-full h-[450px] object-cover"
          src="myke-simon-unsplash.jpg"
          alt="Background Credit: Myke Simon"
        />
        <div className="bg-black/50 absolute top-0 left-0 h-[450px] w-full bg-gradient-to-top from-black"></div>
        <div className="absolute top-[300px] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>

      <SavedMovies />
    </>
  );
};

export default Account;
