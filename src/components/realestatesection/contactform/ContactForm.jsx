import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center ml-[52%] mt-[-208px]">
      <div className="bg-white rounded-[30px] shadow-[10px_30px_50px_rgba(0,0,0,0.05)] h-auto max-w-[420px] w-[420px] p-[29px_20px]">
        <div className="flex flex-col ">
          <h1 className="text-base text-[#3a0ca3] font-medium text-center">
            Contact Us Now
          </h1>
          <div className="flex justify-center mt-5">
            <div className="w-[344px] rounded-full border-[#3a0ca3] border-t-2"></div>
          </div>
          <div className="border-t border-gray-400 w-[110.5%] mt-[1px] ml-[-20px]"></div>
          <div className="flex flex-col space-y-6 w-[90%] ml-5 mt-[40px]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="bg-[hsla(0,0%,83%,0.2)] border-none rounded-[20px] h-[59px] pl-[20px] pr-[25px] focus:outline-none"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              className="bg-[hsla(0,0%,83%,0.2)] border-none rounded-[20px] h-[59px] pl-[20px] pr-[25px] focus:outline-none"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="bg-[hsla(0,0%,83%,0.2)] border-none rounded-[20px] p-[25px_20px] resize-none h-[150px] focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#3a0ca3] text-white rounded-[50px] text-base font-medium h-[60px] w-full hover:bg-[#6d28d9]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
