import { Menu, LogOut, CircleUserRound } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-16 bg-[#1F1F1F] shadow-md border-0 flex justify-between items-center px-4 relative">
      <img src="title.png" alt="Title-MoneyTracker-Pro" className="h-10 ml-2" />
      <span className="m-4 mr-6">
        <Menu
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hover:cursor-pointer"
        />
        {isOpen && (
          <div className="absolute right-0 mt-2 mr-9 w-32 bg-[#262626] shadow-lg rounded-md py-2 z-50 border border-black">
            <Link
              to={"/profile"}
              onClick={() => {
                setIsOpen(false);
              }}
              className="flex justify-self-start w-full text-left px-4 py-2 hover:bg-[#333333] text-white"
            >
              <CircleUserRound className="w-4 mr-3" />
              Profile
            </Link>
            <Link
              to={"/"}
              onClick={() => {
                setIsOpen(false);
              }}
              className="flex w-full text-left text-red-500/90 px-4 py-2 hover:bg-[#333333]"
            >
              <LogOut className="w-4 mr-3" />
              Log Out
            </Link>
          </div>
        )}
      </span>
    </div>
  );
};

export default Navbar;
