// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// hooks
import { useState } from "react";

// main pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error404 from "./pages/Error404";
import Single from "./pages/Single";

// category pages
import GiftsForAnimalLovers from "./pages/GiftsForAnimalLovers";
import Birthday from "./pages/Birthday";
import GiftsForHer from "./pages/GiftsForHer";
import GiftsForHim from "./pages/GiftsForHim";
import Sports from "./pages/Sports";
import Outdoor from "./pages/Outdoor";
import Hobbyist from "./pages/Hobbyist";
import StaffPicks from "./pages/StaffPicks";
import ThankYou from "./pages/ThankYou";
import Miscellanous from "./pages/Miscellanous";
import SubCategory from "./pages/SubCategory";

import { blogData } from "./data";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

function App() {
  const resultsArray = [...blogData];

  const [search, setSearch] = useState("");

  const filteredArray = resultsArray.filter((item) =>
    search.toLowerCase() === ""
      ? null
      : item.title.toLowerCase().includes(search)
  );

  return (
    <div className="">
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home setSearch={setSearch} />} />
          <Route
            path="/search"
            element={<Search filteredArray={filteredArray} />}
          />
          <Route path="/*" element={<Error404 />} />
          <Route path="/single/:id" element={<Single />} />

          <Route path="/animallovers" element={<GiftsForAnimalLovers />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/forher" element={<GiftsForHer />} />
          <Route path="/forhim" element={<GiftsForHim />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/hobbyist" element={<Hobbyist />} />
          <Route path="/staffpicks" element={<StaffPicks />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/miscellanous" element={<Miscellanous />} />
          <Route path="/subcategory" element={<SubCategory />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
