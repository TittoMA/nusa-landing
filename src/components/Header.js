import React, { useState } from "react";
import logo from "../assets/images/nusa-logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="flex flex-wrap bg-amber-700 shadow-2xl px-[10%] py-4 items-center">
        <div className="w-full flex justify-between items-center md:w-auto">
          <div className="md:w-auto shrink-0">
            <Link to="/">
              <img className="w-32" src={logo} alt="Nusa_logo" />
            </Link>
          </div>
          {!isNavOpen ? (
            <button onClick={() => toggleNavbar()} className="md:hidden">
              <Bars3Icon className="h-8 w-8 text-yellow-100 inline" />
            </button>
          ) : (
            <button onClick={() => toggleNavbar()} className="md:hidden">
              <XMarkIcon className="h-8 w-8 text-yellow-100 inline" />
            </button>
          )}
        </div>

        <ul
          className={
            (!isNavOpen ? "hidden " : " ") +
            "w-full mt-6 space-y-4 md:w-auto md:flex md:flex-auto md:justify-end md:mt-0 md:space-y-0 md:space-x-6"
          }
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "border-b-2 border-yellow-300" : "") +
                " text-yellow-100 transition-all duration-100 hover:border-b-2 border-yellow-300"
              }
              to="/"
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavHashLink
              className="text-yellow-100 transition-all duration-100 hover:border-b-2 hover:border-yellow-300"
              to="/#about"
            >
              Tentang
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              className="text-yellow-100 transition-all duration-100 hover:border-b-2 hover:border-yellow-300"
              to="/#feature"
            >
              Fitur
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              className="text-yellow-100 transition-all duration-100 hover:border-b-2 hover:border-yellow-300"
              to="/#comparation"
            >
              Keunggulan
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              className="text-yellow-100 transition-all duration-100 hover:border-b-2 hover:border-yellow-300"
              to="/#product"
            >
              Pesan
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
