import React from "react";
import { navLinks } from "../constants";
import hamburger from "../assets/hamburger.svg";

const Nav = () => {
  return (
    <header className="sm:px-16 px-8 py-4 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <div>
          <p className="text-xl font-bold">NHYRALS</p>
        </div>

        <div>
          <ul className="flex flex-1 justify-center items-center gap-12 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-gray-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden max-lg:block ">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
