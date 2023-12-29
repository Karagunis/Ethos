"use client";

import { useContext } from "react";
import { SearchContext } from "../context/search";

// components
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "search-bg rounded-none py-4"
          : "search-bg rounded-[15px] border py-4 xl:pr-4"
      } hidden xl:block w-full relative border-bottom-hero  border-[#EBEBEB]`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'} items-center`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        {/* btn */}
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-lg btn-accent xl:w-[184px]"
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
