// scroll top component
import ScrollToTop from "../components/ScrollToTop";
import { blogData } from "../data";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow-red-right.svg";
import { useState } from "react";
import { useEffect } from "react";

function ThankYou() {

  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const categoryArray = [...blogData];

    const filtered = categoryArray.filter((article) => {
      return article.category === "Thank You Gifts";
    });

    setGrid(filtered);
  }, []);

  return (
    <div className="">
      <ScrollToTop />

      <div className="category-cover pt-[224px] pb-[150px] xl:pt-[160px]">
        <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] text-center">
          <h1 className="h-strong text-white text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] pb-[15px] text-shadow-h">
          Thank you Gifts
          </h1>
          <p className="text-[#919CB0] text-[15px] font-medium text-shadow-footer-links">
            Check all articles from this category below.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 smm:grid-cols-1 gap-[12px] container mx-auto my-0 xl:px-[48px] md:px-[24px] translate-y-[-80px]">
          {grid.map((item, index) => (
            <Link className="transition-all" to={`/single/${item.id}`}>
              <div
                className="card transition-all p-[15px] sm:p-[12px] rounded-[15px] box-border bg-white shadow-md"
                key={index}
              >
                <img
                  src={item.cover}
                  alt={item.name}
                  className="w-full h-auto block object-contain mb-[15px] rounded-[6px] sm:rounded-[5px]"
                />
                <span className="text-[#7A34A4] text-[12px] font-bold uppercase pb-[12px] tracking-wide">
                  {item.category}
                </span>
                <h2 className="text-[#020202] text-[18px] font-bold sm:text-[16px]">
                  {item.title}
                </h2>
                <div className="flex justify-between gap-[33px] items-center pt-[18px]">
                  <p className="text-[#919CB0] text-[12px] font-medium">
                    {item.date}
                  </p>
                  <img
                    src={Arrow}
                    className="max-w-[24px] w-full h-auto block"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid gap-[18px] text-center">
          <p className="text-[#919CB0] text-[15px] font-medium">
            That’s it! End of results.
          </p>
          <Link
            to="/"
            className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center mx-auto my-0 rounded-full bg-orange-400 w-fit og-btn transition-all"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
