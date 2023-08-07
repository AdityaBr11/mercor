import React from "react";

const Navbar = ({ settoggle, toggle }) => {
  return (
    <div className="px-16 py-8 flex justify-center text-white font-semibold">
      <div className="gap-4 md:flex-row lg:flex hidden">
        <p className="cursor-pointer">SIGN IN</p>
        <p className="cursor-pointer">LEGAL</p>
        <p className="cursor-pointer">LICENSES</p>
        <p className="cursor-pointer">SECURITY</p>
        <p className="cursor-pointer">CAREERS</p>
        <p className="cursor-pointer">PRESS</p>
        <p className="cursor-pointer">SUPPORT</p>
        <p className="cursor-pointer">STATUS</p>
        <p className="cursor-pointer">CODEBLOG</p>
      </div>
      <p
        className="absolute right-10 top-7 cursor-pointer lg:hidden text-white"
        onClick={() => settoggle(!toggle)}
      >
        {!toggle&&<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M2 6h20v2H2zm0 5h20v2H2zm0 5h20v2H2z" />
        </svg>}
      </p>
    </div>
  );
};

export default Navbar;
