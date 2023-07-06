import React from "react";
import iconSearch from "../../public/assets/icon-search.svg";
import iconloco from "../../public/assets/icon-location.svg";
import { useEffect, useState } from "react";

function LargeSearchBar({titleChangehandler, filterTitle, filterLocation, locationChangeHandler, fullTimeHandler, filterFullTime, formSubmitHandler}) {

  //sets placeholder content on desktop
  const [placeholder, setPlaceholder] = useState("Filter by title...");
  const [fullTime, setFullTime] = useState(false);
  const fullTimeTxt = fullTime ? "Full Time Only" : "Full Time";

  //tracks screen resize
  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setPlaceholder("Filter by title, companies, expertise etc...");
      setFullTime(true);
    } else {
      setPlaceholder("Filter by title...");
      setFullTime(false);
    }
  };

  // onmount screen size
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <form id="large-search-bar" className="h-full w-full flex ">
      <div className="h-full w-[222px] border-r border-dgray desktop:w-[463px]">
        <label className="flex items-center gap-[1rem] pl-[1.5rem] py-[1.75rem]">
          <img className="w-[24px] h-[24px]" src={iconSearch} />
          <input
            className="w-full font-kumbh text-body outline-none h-full text-gray bg-white dark:bg-vdblue cursor-pointer"
            placeholder={`${placeholder}`}
            type="text"
            onChange={titleChangehandler}
            value={filterTitle}
          />
        </label>
      </div>

      <div className="h-full w-[213px] desktop:w-[300px] border-r border-dgray">
        <label className="flex gap-[1rem] items-center pl-[1.5rem] py-[1.75rem]">
          <img className="w-[17px] h-[24px]" src={iconloco} />
          <input
            className="w-full font-kumbh text-body outline-none h-full text-gray bg-white dark:bg-vdblue cursor-pointer"
            placeholder="Filter by location"
            type="text"
            onChange={locationChangeHandler}
            value={filterLocation}

          />
        </label>
      </div>

      <div className="pl-[1.5rem] flex gap-[1rem] items-center ">
        <input
          type="checkbox"
          className="bg-gray rounded-xl w-[24px] h-[24px] outline-none cursor-pointer"
          onChange={fullTimeHandler}
          checked={filterFullTime}
        />
        <p className="text-midnight dark:text-white font-bold text-body desktop:mr-[1rem]">
          {fullTimeTxt}
        </p>

        <button
          type="submit"
          className="bg-violet text-white text-body font-bold h-[48px] w-[80px] desktop:w-[123px] rounded hover:bg-lightviolet"
          onClick={formSubmitHandler}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default LargeSearchBar;
