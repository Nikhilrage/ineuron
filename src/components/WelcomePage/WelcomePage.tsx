import React from "react";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../routes/PathNames";
import "./WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container welcome_page flex justify-evenly items-center flex-col text-[#fff]">
      <h1 className="text-5xl font-black">
        Welcome to MTechZilla movies booking app.
      </h1>
      <button
        className="bg-sky-500 hover:bg-sky-700 ease-in duration-300 p-3"
        onClick={() => navigate(PathNames.MOVIES)}
      >
        Get Started
      </button>
    </div>
  );
};

export default WelcomePage;
