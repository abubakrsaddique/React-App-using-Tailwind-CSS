import React from "react";
import ContactForm from "./contactform/ContactForm";
import MySwiperComponent from "./myswipercomponent/MySwiperComponent";

const RealEstateSection = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-blue-300 rounded-b-[800px] h-[800px] w-full p-0 m-0">
      <div className="mt-[200px] ml-[85px] w-[40%]">
        <div className="flex flex-col items-start space-y-5">
          <h1 className="text-blue-600 text-xl font-medium tracking-[2.91px]">
            REAL ESTATE
          </h1>
          <h2 className="text-black text-6xl font-semibold leading-[65px]">
            Find a perfect home you love..!
          </h2>
          <p className="text-base text-gray-400 w-full">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>
        </div>
      </div>
      <div>
        <MySwiperComponent />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default RealEstateSection;
