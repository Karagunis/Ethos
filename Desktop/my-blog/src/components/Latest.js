import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { blogData } from "../data";
import { Link } from "react-router-dom";

function Latest() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const categoryArray = [...blogData];

    const newArr = categoryArray.slice(-6);

    setGrid(newArr);
  }, []);

  return (
    <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px]">
      <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold max-w-[700px] pb-[21px]">
        Latest articles
      </h1>
      <div className="grid max-w-[726px] w-full box-border gap-[12px] md:grid md:gap-[18px] md:grid-cols-2 sm:grid-cols-1">
        {grid.map((item, index) => (
          <Link className="transition-all" to={`/single/${item.id}`}>
            <div
              className="card transition-all p-[10px] sm:p-[12px] rounded-[12px] box-border bg-white shadow-md flex gap-[15px] items-center md:grid"
              key={index}
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
    </div>
  );
}

export default Latest;
