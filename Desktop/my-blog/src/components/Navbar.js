import { Link } from "react-router-dom";

// Images
import Arrow from "../assets/arrow-nav.svg";
import Logo from "../assets/logo-foot.png";
import Boxnav from "../assets/gift-nav.png";
import Glass from "../assets/search-icon.svg";
import Menu from "../assets/menu-vertical.svg";
import Logomob from "../assets/logo-mob.png";

import { useEffect } from "react";
import { useState } from "react";

// navigate
import { useNavigate } from "react-router-dom";

function Navbar({ setSearch }) {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <nav className="bg-[#02333E] border-b-[1px] border-b-[#1B5E69] box-border fixed top-0 z-40 w-full flex-none lg:z-50 h-[80px] shadow xl:px-[48px] md:px-[24px] ">
      <div className="container flex justify-between items-center relative">
        <img
          src={Boxnav}
          alt=""
          className={`${
            header ? "opacity-0" : "opacity-1"
          } absolute bottom-0 w-[110px] h-auto block top-[45px] left-[370px] transition-all duration-500 xl:hidden`}
        />

        <Link to="/">
          <img
            className="max-w-[249px] h-auto block md:hidden"
            src={Logo}
            alt=""
          />
          <img
            src={Logomob}
            alt=""
            className="hidden md:block w-[38px] h-auto"
          />
        </Link>

        <div className="flex gap-[15px] items-center md:gap-[10px] md:flex-row-reverse">
          <div className="h-[80px] p-0 m-0 items-center relative flex category-nav">
            <div className=" bg-[#304B5D] border-[1px] border-[#718498] flex gap-[15px] text-white text-[15px] h-[50px] px-[15px] items-center rounded-[12px] box-shadow-nav cursor-pointer md:w-[50px] md:justify-center md:rounded-[9px]">
              <div>
                <span className="font-medium md:hidden">Categories</span>
                <img src={Menu} alt="" className="hidden md:block" />
              </div>
              <img src={Arrow} alt="" className="md:hidden" />
            </div>
            <div className="absolute top-[77px] right-[0] bg-[#304B5D] border-[1px] border-[#718498] rounded-[12px] p-[12px] gap-[6px] overflow-x-hidden overflow-y-scroll h-[270px] w-[240px] scroll-change hidden opacity-0 dropdown">
              <Link
                to="/staffpicks"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Staff Picks
              </Link>
              <Link
                to="/birthday"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Gifts for Birthday
              </Link>
              <Link
                to="/thankyou"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Thank You Gifts
              </Link>
              <Link
                to="/forher"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Gifts For Her
              </Link>
              <Link
                to="/forhim"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Gifts For Him
              </Link>
              <Link
                to="/animallovers"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Gifts For Animal Lovers
              </Link>
              <Link
                to="/outdoor"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Outdoor Enthusiasts
              </Link>
              <Link
                to="/hobbyist"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Gifts For Hobbyist
              </Link>
              <Link
                to="/sports"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Sports Enthusiasts
              </Link>
              <Link
                to="/miscellanous"
                className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
              >
                Miscellanous
              </Link>
            </div>
          </div>

          <form className="relative" onSubmit={onSubmitHandler}>
            <img
              className="absolute top-[14px] left-[12px]"
              src={Glass}
              alt=""
            />
            <input
              type="search"
              className="bg-[#0000005c] w-[300px] border rounded-[12px] px-5 pl-[43px] border-[#2B8F9F] placeholder-[#3ADE1D] font-medium text-white outline-none h-[50px] md:w-[240px] sm:max-w-[200px] sm:w-full"
              placeholder="Search here..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
