import React from "react";
import logo from "../../public/assets/logo.svg";
import sun from "../../public/assets/icon-sun.svg";
import moon from "../../public/assets/icon-moon.svg";
import ThemeSwitch from "./ThemeSwitch";

function Header({ darkMode, setDarkMode, setJobDetailPage }) {

  return (
    <header className="h-[136px] px-[1.5rem] py-[2rem] relative">
      <nav className="flex justify-between items-center">
        <img
          className="cursor-pointer"
          onClick={() => setJobDetailPage(false)}
          src={logo}
        />

        <div className="w-[112px] flex justify-between items-center">
          <img className="w-[20px] h-[20px]" src={sun} />

          <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />

          <img className="w-[14px] h-[14px]" src={moon} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
