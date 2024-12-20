import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo_no_bg.png";
import AccessBtn from "../ui/AccessBtn";

const Hero = () => {
  return (
    <div className="bg-[#413633] min-h-screen flex flex-col justify-center p-5">
      <div>
        <img
          src={logo}
          alt="villa mutti logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="mb-5 font-semibold text-lg text-[#fbfaf0]">
          Depuis 2014, tu mets tout ton coeur à transformer et embellir cette
          maison. <br />
          Aujourd'hui tu en as fait un endroit magnifique où l'on se sent bien
        </p>
        <span className="h-full w-full">
          <Link to="/homepage">
            <AccessBtn content="Accéder aux photos" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Hero;
