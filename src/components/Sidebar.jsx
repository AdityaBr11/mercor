import React from "react";

const Sidebar = ({ toggle, settoggle }) => {
  return (
    <div
      className={`transition-[left] ease-in duration-150 text-lg absolute w-80 h-screen  ${
        toggle ? "left-0" : "-left-80"
      } z-50 blurclass flex flex-col gap-4 text-white `}
    >
      <div
        className="w-full flex justify-end text-white p-4"
        onClick={() => settoggle(!toggle)}
      >
        {
            toggle?"X":""
        }
      </div>
      <p className="px-6 hover:font-bold">SIGN IN</p>
      <p className="px-6 hover:font-bold">LEGAL</p>
      <p className="px-6 hover:font-bold">LICENSES</p>
      <p className="px-6 hover:font-bold">SECURITY</p>
      <p className="px-6 hover:font-bold">CAREERS</p>
      <p className="px-6 hover:font-bold">PRESS</p>
      <p className="px-6 hover:font-bold">SUPPORT</p>
      <p className="px-6 hover:font-bold">STATUS</p>
      <p className="px-6 hover:font-bold">CODEBLOG</p>
    </div>
  );
};

export default Sidebar;
