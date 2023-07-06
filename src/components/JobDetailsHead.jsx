import React from "react";

function JobDetailsHead({ selectedjob }) {
  return (
    <article className="fade-in relative top-[-15px] min-w-[327px] desktop:w-[730px] tablet:w-[689px] h-[205px] tablet:h-[140px] bg-white dark:bg-vdblue 
    mx-auto rounded-xl tablet:overflow-hidden tablet:flex tablet:items-center tablet:justify-between">
      <div className="flex tablet:gap-[2.5rem] items-center flex-col tablet:flex-row">
        <div
          style={{ backgroundColor: selectedjob.logoBackground }}
          className="w-[50px] h-[50px] tablet:w-[140px] tablet:h-[140px] rounded-xl tablet:rounded-none flex items-center justify-center relative mx-auto top-[-25px] tablet:top-[0px] tablet:inline-flex"
        >
          <img
            className="tablet:w-[85px]"
            src={selectedjob.logo}
            alt="Job-logo"
          />
        </div>

        <div>
          <h1 className="text-h1-mb tablet:text-h2-dk text-midnight dark:text-white mb-[0.5rem]">
            {selectedjob.company}
          </h1>
          <p className="text-body text-dgray">{selectedjob.company}.com</p>
        </div>
      </div>

      <div className="flex-col text-center items-center justify-center w-[147px] tablet:mr-[2.5rem] mx-auto">
     
          <button className="px-[1.25rem] py-[1rem] bg-lgray dark:bg-midnight rounded-md leading-[20px] text-center text-violet text-body font-bold mt-[1.5rem] tablet:mt-[0rem]">
            Company Site
          </button>
     
      </div>
    </article>
  );
}

export default JobDetailsHead;
