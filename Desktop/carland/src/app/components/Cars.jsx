// components
import CarSlider from "./CarSlider";
import Brands from "./Brands";

const Cars = () => {
  return (
    <section className="h-screen flex items-center border-bottom-hero" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
};

export default Cars;
