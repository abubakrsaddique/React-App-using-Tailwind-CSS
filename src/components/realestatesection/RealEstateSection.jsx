import React from "react";
import ContactForm from "./contactform/ContactForm";
import MySwiperComponent from "./myswipercomponent/MySwiperComponent";

const RealEstateSection = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-blue-300 rounded-b-[800px]  h-[800px] w-full p-0 m-0">
      <div className="mt-52 md:mt-32 lg:mt-40 xl:mt-32 px-6 md:px-12 lg:px-20 xl:pl-20 xl:pr-36 w-full lg:w-3/5">
        <div className="flex flex-col items-start space-y-5">
          <h1 className="text-blue-600 text-xl md:text-2xl lg:text-3xl font-medium tracking-widest max-md:-mt-20">
            REAL ESTATE
          </h1>
          <h2 className="text-black max-md:w-[86%] text-5xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Find a perfect home you love..!
          </h2>
          <p className="text-base md:text-lg text-black -400 w-full">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>
        </div>
      </div>
      <div>
        <MySwiperComponent />
      </div>
      {/* <div>
        <ContactForm />
      </div> */}
    </div>
  );
};

export default RealEstateSection;
