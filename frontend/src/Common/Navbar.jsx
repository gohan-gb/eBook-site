import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className= "z-10 !font-montserrat bg-[#808f85] py-4 fixed top-0 left-0 right-0">
      <nav className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-32  ">
        <div className=" flex justify-between" >
        <Link to='/' ><h1> LOGO</h1></Link>
        <ul className="flex">
          <li className="">Log in</li>
          <li className="mx-8">Search</li>
          <li className="">Hamburger</li>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
