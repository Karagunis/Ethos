"use client";

// components
import { useContext } from "react";
import { SearchContext } from "../context/search";
import Search from "./Search";

// next image
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "/variants";

const Hero = () => {
  const { searchActive } = useContext(SearchContext);

  return (
    <section
      className=" h-screen xl:h-[90vh] bg-transparent border-bottom-hero"
      id="home"
    >
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex-col xl:flex-row xl:justify-start h-full justify-center items-center content-center flex gap-[42px]">
          {/* text */}
          <div className="text-center hl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1 max-w-[600px] text-gradient"
            >
              Explore the Finest <span className="text-accent">Global</span>{" "}
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/* btn appstore */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
              {/* btn google */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
            </motion.div>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="w-full h-full max-h-[50vh] xl:max-w-[600px] xl:max-h-[542px]  transform-none relative max-w-[500px] right-auto top-auto"
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[64px] z-10 w-full max-w-full">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1200px] container mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
};

export default Hero;
