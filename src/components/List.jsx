import React from "react";
import JobCard from "./JobCard";
import { useState } from "react";

function List({ clickedJobHandler, filterResult, listings, filterOptions }) {
  const [visibleListings, setVisibleListings] = useState(6);

  const loadMoreHandler = () => {
    setVisibleListings((prevVisibleListings) => prevVisibleListings + 3);
  };

  return (
    <article className="flex-col items-center justify-center ">
      <ul className="w-[327px] tablet:w-[689px] desktop:w-[1110px] tablet:flex tablet:flex-wrap gap-[0.6875rem] desktop:gap-[30px] mx-auto">
        {filterOptions.length === 0
          ? listings
              .slice(0, visibleListings)
              .map((listing, index) => (
                <JobCard
                  listing={listing}
                  index={index}
                  key={listing.id}
                  onClick={() => clickedJobHandler(listing.id)}
                />
              ))
          : filterResult.length === 0
          ? (<div className="mx-auto h-[100px] w-full"><p className="text-dgray font-bold text-h1-mb">No results found</p></div> )
          : filterResult.map((listing, index) => (
              <JobCard
                listing={listing}
                index={index}
                key={listing.id}
                onClick={() => clickedJobHandler(listing.id)}
              />
            ))}
      </ul>

      <div className="flex items-center">
        <button
          onClick={loadMoreHandler}
          disabled={visibleListings >= 15}
          className={
            visibleListings >= 15
              ? `mt-[3.5rem] w-[141px] h-[48px] bg-dgray text-lgray font-bold rounded mx-auto`
              : "mt-[3.5rem] w-[141px] h-[48px] bg-violet text-white font-bold rounded mx-auto"
          }
        >
          Load More
        </button>
      </div>
    </article>
  );
}

export default List;
