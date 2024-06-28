import React from "react";
import ImageSrc from "../../images/card2.png";

const CardComponent = () => {
  return (
    <div className="lg:-mt-2 ml-4 max-sm:mt-64 md:mt-72">
      <div className="flex flex-col lg:flex-row justify-center gap-12 lg:mr-96">
        <div className="lg:ml-96 lg:-mt-16 w-auto flex justify-center mt-8">
          <div
            className="bg-white rounded-full shadow-lg h-[100px] px-6 flex items-center"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h1 className="text-base font-medium pl-2 text-center lg:text-left">
              72k+ Happy <br />
              Customers
            </h1>
          </div>
        </div>
        <div
          className="lg:-ml-8 lg:-mt-16 max-sm:-mt-6  w-auto flex justify-center mt-8"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="bg-white rounded-full shadow-lg h-[100px] px-6 flex items-center">
            <img
              src={ImageSrc}
              className="h-auto max-w-full"
              alt="Card Image"
            />
            <h1 className="text-base font-medium pl-2 text-center lg:text-left">
              200+ New <br />
              Listings Everyday!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
