import React from "react";
import ImageSrc from "../../images/card2.png";

const CardComponent = () => {
  return (
    <div className="mt--16 ml-[34px]">
      <div className="flex flex-row justify-center gap-12 mr-96 mt-0">
        <div className="ml-96 -mt-16 w-auto  flex justify-center">
          <div
            className="bg-white rounded-full shadow-lg h-[100px] px-6 flex items-center"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h1 className="text-base font-medium pl-2">
              72k+ Happy <br />
              Customers
            </h1>
          </div>
        </div>
        <div
          className="-ml-8 -mt-16  w-auto flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="bg-white rounded-full shadow-lg h-[100px] px-6 flex items-center">
            <img src={ImageSrc} className="h-auto max-w-full" alt="" />
            <h1 className="text-base font-medium pl-2">
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
