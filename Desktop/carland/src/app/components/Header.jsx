"use client";
import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

// react scroll
import { Link } from "react-scroll";

// components
import SearchMobile from "./SearchMobile";

// media query hook
import { useMediaQuery } from "react-responsive";

// icons
import { BiMenuAltRight, BiX } from "react-icons/bi";

// search context
import { SearchContext } from "../context/search";

const Header = () => {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1240px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 39) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white" : "bg-transparent shadow-none"
      } fixed w-full mx-auto z-20 transition-all duration-300 bg-white h-[64px] header xl:content-center xl:grid xl:w-full xl:items-center`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between xl:w-full">
        <div className="flex justify-between items-center px-4 pt-[0px] h-[64px]">
          {/* logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/logo.svg"}
              height={0}
              width={0}
              alt=""
              style={{ width: "auto", height: "51px" }}
              className="w-auto"
            />
          </Link>
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 header "
              : "max-h-0 xl:max-h-max"
          } flex flex-col w-full gap-y-[6] overflow-hidden font-medium xd:font-medium xl:flex-row xl:w-max xl:gap-x-[24px] xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center text-[#666666] xl:text-left uppercase text-sm xl:text-[16px] xl:normal-case gap-[18px] text-[16px]`}
        >
          <Link
            className="cursor-pointer hover:text-black transition-all duration-300 w-fit mx-auto"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer hover:text-black transition-all duration-300 w-fit mx-auto"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer hover:text-black transition-all duration-300 w-fit mx-auto"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer hover:text-black transition-all duration-300 w-fit mx-auto"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            className="cursor-pointer hover:text-black transition-all duration-300 w-fit mx-auto"
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer hover:text-black transition-all duration-300 w-fit mx-auto"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="cursor-pointer xl:hidden btn btn-primary btn-sm w-fit pl-[21px] pr-[21px] leading-none capitalize mx-auto"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
