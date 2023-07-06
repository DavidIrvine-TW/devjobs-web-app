import React from "react";

function JobDetailsFooter({ selectedjob }) {
  return (
    <div className=" fade-in  mt-[4rem] bg-white dark:bg-vdblue p-[1rem] rounded-md tablet:flex justify-between items-center desktop:w-[730px]  tablet:w-[689px] tablet:h-[96px] mx-auto">
      <div className="hidden tablet:inline-flex flex-col text-h1-mb text-midnight dark:text-white mb-[0.5rem] mt-[0.5rem]" >
        {selectedjob.position}
        <p className="text-dgray text-body mt-[0.5rem] ">So Digital Inc</p>
      </div>
      <div className="tablet:w-[141px]">
        <button className="bg-violet text-white font-bold rounded-md w-full h-[48px]  hover:bg-lightviolet">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobDetailsFooter;
