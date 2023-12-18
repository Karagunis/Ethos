// scroll top component
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

function SubCategory() {
  return (
    <div className="">
      <ScrollToTop />

      <div className="category-cover pt-[224px] pb-[150px] xl:pt-[160px]">
        <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] text-center">
          <h1 className="h-strong text-white text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] pb-[15px] text-shadow-h">
            SubCategories <strong>Listed</strong>.
          </h1>
          <p className="text-[#919CB0] text-[15px] font-medium text-shadow-footer-links">
            Check all subcategories from this category below.
          </p>
        </div>
      </div>
      <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px]">
        <div className="bg-white rounded-[9px] shadow-md flex gap-[9px] flex-wrap container mx-auto my-0 p-[33px] translate-y-[-54px] sm:translate-y-[-70px] justify-center xl:px-[48px] md:px-[24px] ">
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Baseball
          </Link>
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Basketball
          </Link>
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Football
          </Link>
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Soccer
          </Link>
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Hockey
          </Link>
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Swimming
          </Link>
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Tennis
          </Link>
          <Link
            to="/"
            className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
          >
            Other
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
