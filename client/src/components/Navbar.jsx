import React, {useContext} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

import { TransactionContext } from "../context/TransactionContext";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-center items-center p-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <p className="text-white font-audio text-5xl">CRYPTON</p>
      </div>
    </nav>
  );
};

export default Navbar;
