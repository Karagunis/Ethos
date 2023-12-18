import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { blogData } from "../data";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow-white-right.svg";
import ArrowBlack from "../assets/arrow-black.svg";

function ForHimHome() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const categoryArray = [...blogData];

    const filtered = categoryArray.filter((article) => {
      return article.category === "Gifts For Her";
    });

    const newArr = filtered.slice(-6);

    setGrid(newArr);
  }, []);

  return (
    <div className="flex gap-[45px] xl:gap-[15px] items-start container xl:px-[48px] md:px-[24px] mx-auto my-0 pt-[60px] sm:pt-[60px] lg:gap-[80px] lg:grid sm:gap-[60px]" >
      <div>
        <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold max-w-[700px] pb-[21px]">
          Gifts For Her
        </h1>
        <div className="grid max-w-[726px] w-full box-border gap-[12px] md:grid md:gap-[18px] md:grid-cols-2 sm:grid-cols-1">
          {grid.map((item, index) => (
            <Link key={index} className="transition-all" to={`/single/${item.id}`}>
              <div
                className="card transition-all p-[10px] sm:p-[12px] rounded-[12px] box-border bg-white shadow-md flex gap-[15px] items-center md:grid"
                
              >
                <img
                  src={item.cover}
                  alt={item.name}
                  className="w-full max-w-[170px] h-[137px] block object-cover rounded-[6px] sm:rounded-[5px] md:object-contain md:max-w-[100%] md:w-full md:h-auto"
                />

                <div className="grid gap-[9px] items-center">
                  <h2 className="text-[#020202] text-[18px] font-bold sm:text-[16px]">
                    {item.title.length >= 70
                      ? item.title.substring(0, 70) + "..."
                      : null}
                  </h2>
                  <div className="flex gap-[6px] items-center">
                    <span className="text-[#7A34A4] bg-[#F8F2FC] py-[1px] px-[5px] rounded-[3px] text-[12px] font-semibold">
                      {item.category}
                    </span>
                    <p className="text-[#336997] bg-[#F0F5F9] py-[1px] px-[5px] rounded-[3px] text-[12px] font-semibold">
                      {item.date}
                    </p>
                  </div>

                  <p className="text-[12px] text-[#747D84] font-medium">
                    {item.description.length >= 100
                      ? item.description.substring(0, 100) + "..."
                      : null}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/forher"
          className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center rounded-full bg-orange-400 w-fit og-btn transition-all mt-[30px]"
        >
          <p className="uppercase">SEE MORE</p>
          <img src={Arrow} alt="" className="pl-[18px]" />
        </Link>
      </div>
      <div className="max-w-[340px] w-full lg:max-w-[726px]">
        <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold max-w-[700px] pb-[21px]">
          Categories
        </h1>
        <div className="grid p-[6px] gap-[6px] rounded-[9px] shadow-md bg-white  w-full">
          <Link
            to="/staffpicks"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Staff Picks
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/birthday"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Gifts for Birthday
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/thankyou"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Thank You Gifts
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/forher"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Gifts For Her
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/forhim"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Gifts For Him
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/animallovers"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Gifts For Animal Lovers
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/outdoor"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Outdoor Enthusiasts
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/hobbyist"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Gifts For Hobbyist
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/sports"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Sports Enthusiasts
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>

          <Link
            to="/miscellanous"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#F0F5F9] hover:border-[#F8F2FC] bg-white hover:bg-[#F8F2FC] rounded-[6px] flex justify-between items-center"
          >
            <span className="text-[16px] text-[#477295] font-medium">
              Miscellanous
            </span>
            <img src={ArrowBlack} alt="" className="w-[9px] h-auto block" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForHimHome;
