import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#3a0ca3] text-white p-2 absolute top-0 left-0 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <MdLocationOn className="w-5 h-5 ml-14" />
          <p className="ml-1 text-sm">Rezilla, 18 Grattan St, Brooklyn</p>
        </div>
        <div className="flex items-center mr-12">
          <div className="flex items-center">
            <MdPhone className="w-5 h-5" />
            <p className="ml-2 text-sm">+1 206-214-229</p>
          </div>
          <div className="flex items-center ml-4 mr-4">
            <MdEmail className="w-5 h-5" />
            <p className="ml-2 text-sm">support@rezilla.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
