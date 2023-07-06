import React from "react";

function ThemeSwitch({darkMode, setDarkMode}) {
  return (
    <label
      className=" relative inline-block w-[48px] h-[24px]"
      aria-label="Dark mode"
    >
      <input
        className="peer opacity-0 w-0 h-0"
        type="checkbox"
        checked={darkMode}
        onChange={setDarkMode}
      />
      <span
        className="absolute cursor-pointer inset-0 rounded-full bg-white dark:bg-midnight before:absolute 
              before:content-[''] before:h-[14px] before:w-[14px] before:rounded-full before:left-[4px] 
              before:bottom-[5px] before:bg-thumb peer-focus-visible:bg-violet-500 peer-checked:before:translate-x-[26px] 
              before:transition-all"
      ></span>
    </label>
  );
}

export default ThemeSwitch;
