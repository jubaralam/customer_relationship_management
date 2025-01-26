// import React from "react";
import poster from "../assets/poster.svg";
const HeroSection = () => {
  return (
    <div className="svg-img">
      <section className="hero-section flex justify-between items-center  min-h-[90vh]  w-7xl mx-auto bg-[#ebebeb44] ">
        <aside className="w-[50vw]">
          <div className="my-6">
            <h1 className="text-5xl font-black my-2">
              INDIA&rsquo;S FAVORITE CRM
            </h1>
            <h3 className="text-5xl">for accelerated business growth</h3>
          </div>
          <p className="text-xl">
            CRM System: Simplifying Customer Management by Connecting Marketing,
            Sales, and Support with Unified Data - Empowering Your Team to
            Succeed Together.
          </p>
        </aside>
        <aside>
          <img src={poster} alt="Poster Image" className="w-full h-[450px]" />
        </aside>
      </section>
    </div>
  );
};

export default HeroSection;
