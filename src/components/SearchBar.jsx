import React from "react";
import MobileSearchBar from "./MobileSearchBar";
import LargeSearchBar from "./LargeSearchBar";

function SearchBar({setMobileModal, titleChangehandler, filterTitle, filterLocation, locationChangeHandler, fullTimeHandler, filterFullTime, formSubmitHandler}) {

  const mobileFilterhandler = () => {
    setMobileModal((prev) => !prev);
    console.log('clicked')
  };
  const searchButtonHandler = (event) => {
    event.preventDefault();
   
  };

  return (
    <section className="relative bg-white dark:bg-vdblue rounded-xl w-[327px] tablet:w-[689px] desktop:w-[1110px] h-[80px] top-[-40px] tablet:py-[0px] tablet:px-[0px] py-[1rem] pr-[1rem] pl-[1.5rem] mb-[3rem] mx-auto">
      <MobileSearchBar
        mobileFilterhandler={mobileFilterhandler}
        titleChangehandler={titleChangehandler}
        filterTitle={filterTitle}
        searchButtonHandler={searchButtonHandler}
        filterLocation={filterLocation}
        locationChangeHandler={locationChangeHandler}
        fullTimeHandler={fullTimeHandler}
        formSubmitHandler={formSubmitHandler}
        
      />
      <LargeSearchBar
        filterTitle={filterTitle}
        titleChangehandler={titleChangehandler}
        filterLocation={filterLocation}
        locationChangeHandler={locationChangeHandler}
        fullTimeHandler={fullTimeHandler}
        filterFullTime={filterFullTime}
        formSubmitHandler={formSubmitHandler}
        
      />
    </section>
  );
}

export default SearchBar;
