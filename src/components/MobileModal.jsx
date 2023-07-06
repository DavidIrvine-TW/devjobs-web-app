import React from "react";
import locoIcon from "../../public/assets/icon-location.svg";

function MobileModal(props) {

  const { mobileModal, setMobileModal, filterLocation, locationChangeHandler, fullTimeHandler, filterFullTime, formSubmitHandler  } = props;

  const modalVisibile = mobileModal ? "" : "hidden";

    const mobileSearchHandler = (event) => {
        event.preventDefault()
        setMobileModal((prev) => !prev)
        
    }

  return (
    <div
      className={`${modalVisibile} absolute top-0 left-0 bottom-0 right-0 bg-overlay z-10 flex justify-center `}
    >
      <form className="fade-in w-[327px] h-[217px] mt-[14.0625rem] bg-white dark:bg-vdblue rounded-xl">

        <div className="border-b border-gray w-full p-[1.5rem]">
          <label className="flex gap-[1rem] items-center">
            <img className="w-[17px] h-[24px]" src={locoIcon} />
            <input
              className=" font-kumbh text-gray text-body bg-white dark:bg-vdblue outline-none cursor-pointer"
              placeholder="Filter by location"
              onChange={locationChangeHandler}
              value={filterLocation}
            />
          </label>
        </div>

        <div className=" w-full p-[1.5rem] flex gap-[1rem] items-center ">
          <input
            type="checkbox"
            className="bg-gray rounded-xl w-[25px] h-[25px] outline-none cursor-pointer"
            onChange={fullTimeHandler}
            checked={filterFullTime}
          />
          <p className="text-midnight dark:text-white font-bold text-body">
            Full Time Only
          </p>
        </div>

        <div className="px-[1.5rem] mx-auto">
          <button
            type="submit"
            className="bg-violet text-white text-body font-bold h-[48px] w-[279px] rounded hover:bg-lightviolet"
            onClick={formSubmitHandler}
          >
            Search
          </button>
        </div>

      </form>

    </div>
  );
}

export default MobileModal;
