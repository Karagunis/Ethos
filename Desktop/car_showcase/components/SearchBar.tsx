"use client";

import { SearchManufacturer } from ".";
import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({setManufacturer, setModel}) => {
  const [searchManfacturer, setSearchManfacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManfacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchManfacturer);
  };


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManfacturer}
          setSelected={setSearchManfacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={24}
          height={24}
          className="absolute w-[21px] h-[21px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
