import React from "react";
import SearchBar from "./SearchBar";
import List from "./List";
import MobileModal from "./MobileModal";
import { useState } from "react";
import listings from "../../public/assets/data.json"

function ListPage({ clickedJobHandler }) {
  //mobile modal visibile
  const [mobileModal, setMobileModal] = useState(false);
  // const modalVisibile = mobileModal
  //   ? "h-screen overflow-hidden"
  //   : "min-h-screen ";

  const [filterOptions, setFilterOptions] = useState([]);
  const [filterResult, setFilterResult] =  useState([])
  const [filterTitle, setFilterTitle] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterFullTime, setFilterFullTime] = useState(false);

  const titleChangehandler = (e) => {
    setFilterTitle(e.target.value.toLowerCase());
  };
  const locationChangeHandler = (e) => {
    setFilterLocation(e.target.value.toLowerCase());
  };
  const fullTimeHandler = () => {
    setFilterFullTime((prev) => !prev);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      filterTitle.trim() === "" &&
      filterLocation.trim() === "" &&
      !filterFullTime
    ) {
      setFilterOptions([]);
    } else if (
      !filterOptions.some(
        (option) =>
          option[0] === filterTitle &&
          option[1] === filterLocation &&
          option[2] === filterFullTime
      )
    ) {
      setFilterOptions([filterTitle, filterLocation, filterFullTime]);
    }

    setFilterLocation("");
    setFilterTitle("");
    setMobileModal(false);

    // Filter the listings based on filterOptions
    const filteredListings = listings.filter((listing) => {
      if (filterFullTime === true) {
        return (
        
          listing.position.toLowerCase().includes(filterTitle) &&
          listing.location.toLowerCase().includes(filterLocation) &&
          listing.contract === "Full Time"
        );
      } else {
        return (
        
          listing.position.toLowerCase().includes(filterTitle) &&
          listing.location.toLowerCase().includes(filterLocation) &&
          listing.contract
        );
      }
    });

    // Update the filterResult state with the filtered listings
    setFilterResult(filteredListings);
  };
  
  return (
    <>
      <SearchBar
        setMobileModal={setMobileModal}
        filterOptions={filterOptions}
        titleChangehandler={titleChangehandler}
        filterTitle={filterTitle}
        locationChangeHandler={locationChangeHandler}
        filterLocation={filterLocation}
        fullTimeHandler={fullTimeHandler}
        formSubmitHandler={formSubmitHandler}
      />
      <MobileModal
        mobileModal={mobileModal}
        setMobileModal={setMobileModal}
        locationChangeHandler={locationChangeHandler}
        filterLocation={filterLocation}
        fullTimeHandler={fullTimeHandler}
        filterFullTime={filterFullTime}
        formSubmitHandler={formSubmitHandler}
      />
      <List
        setMobileModal={setMobileModal}
        clickedJobHandler={clickedJobHandler}
        filterResult={filterResult}
        listings={listings}
        filterOptions={filterOptions}
      />
    </>
  );
}

export default ListPage;
