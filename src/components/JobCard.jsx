import React from "react";

function JobCard({listing, onClick, filterOptions}) {
  return (
    <li
      id="job-card"
      className="fade-in bg-white dark:bg-vdblue h-[228px] w-[327px] tablet:w-[339px] desktop:w-[350px] rounded-xl relative pl-[2rem] mb-[3rem] pb-[1rem] cursor-pointer"
      key={listing.id}
      onClick={onClick}
    >
      <div
        style={{ backgroundColor: listing.logoBackground }}
        className="w-[50px] h-[50px] rounded-xl flex items-center justify-center relative top-[-25px] "
      >
        <img src={listing.logo} alt="Job-logo" />
      </div>

      <div className="w-[286px]">
        <div className="mb-[1rem] text-body text-gray">
          <span>{listing.postedAt}</span> | <span>{listing.contract}</span>
        </div>
        <div>
          <h3 className="mb-[1rem] text-h1-mb dark:text-white text-midnight">
            {listing.position}
          </h3>
        </div>
        <div>
          <p className="mb-[1.75rem] text-body text-gray">{listing.company}</p>
          <p className="font-bold text-body text-blue-500">
            {listing.location}
          </p>
        </div>
      </div>
    </li>
  );
}

export default JobCard;
