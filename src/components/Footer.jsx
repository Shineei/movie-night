import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

/* **********************     Footer    ************************************/
const Footer = () => {
  return (
    // Foother Container
    <div className="width-[100%] p-6 py-10 text-white flex flex-col md:flex-row justify-around mt-8 gap-8 bg-razzmatazz-600/10">
      {/* >>>>>>>>>>>>>>>>>>>>>>>    MOVIE-Night     <<<<<<<<<<<<<<<<<<<<<<<*/}
      <div className="max-w-[550px]">
        {/* Title */}
        <h3 className="text-razzmatazz-600 text-xl font-semibold  mb-4">
          <span>MOVIE </span>
          <span className="text-white text-sm font-bold ">NIGHT</span>
          <hr />
        </h3>

        {/* Text */}
        <div className="flex">
          <BsInfoCircle size="50" className="mr-4 text-amber-500" />
          <p className="py-2">
            <span className="text-cyan-50/90 font-thin">
              <strong className="text-lime-400 ">
                This project is for my portfolio only!{" "}
              </strong>
              I built this page based on tutorials of{" "}
              <strong className="font-medium ">
                React, Firebase, and TailwindCSS
              </strong>
            </span>
          </p>
        </div>
      </div>
      {/* >>>>>>>>>>>>>>>>>>>>>>     Credits       <<<<<<<<<<<<<<<<<<*/}
      <div>
        {/* Credit Title */}
        <h3 className="text-razzmatazz-600 text-xl font-semibold min-w-[300px]">
          CREDITS <hr />
        </h3>

        {/* List (credits) */}
        <ul className="text-sky-100 my-4 ">
          {/* Tutorial: by Code Comerce */}
          <Credit
            url="https://youtu.be/ATz8wg6sg30"
            author="Code Commerce"
            work="tutorial"
          />

          <Credit
            url="https://www.themoviedb.org/"
            author="The Movie Database"
            work="TMDB"
          />

          <Credit
            url="https://unsplash.com/photos/atsUqIm3wxo"
            author="Myke Simon"
            work="Background-Image"
          />
        </ul>
      </div>

      {/* >>>>>>>>>>>>>>>>>>>>>    Socials     <<<<<<<<<<<<<<<<<<*/}
      <div>
        {/* Socials' Title */}
        <h3 className="text-razzmatazz-600 text-xl font-semibold">
          SOCIALS
          <hr />
        </h3>

        {/* Deveoper Links */}
        <p className="text-sky-200/80 my-4 ml-8 md:ml-1 font-thin">
          Follow me for more content:
        </p>
        <div className="flex justify-center gap-4 ">
          <a
            href="https://www.linkedin.com/in/joshi-ventura-leon/"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm hover:cursor-pointer  hover:bg-razzmatazz-600"
          >
            <FaLinkedin size="30" />
          </a>
          <a
            href="https://github.com/Shineei"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl hover:cursor-pointer  hover:bg-razzmatazz-600"
          >
            <FaGithub size="30" />
          </a>
        </div>
      </div>
    </div>
  );
};

/***********************       Credit Function       *********************/
function Credit(props) {
  const { url, author, work } = props;
  return (
    <li className="hover:bg-razzmatazz-200/20 flex py-1 px-8 md:px-1 rounded-md font-thin ">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-razzmatazz-100/80 hover:text-razzmatazz-500 "
      >
        {author}
        <span className="text-blue-400 hover:text-lime-400 no-underline font-semibold">
          : ({work})
        </span>
      </a>
    </li>
  );
}

export default Footer;
