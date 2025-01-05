import React from "react";

const AboutMe = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto font-OpenSans bg-color5 px-4 py-8 sm:px-6 sm:py-10 lg:px-20 lg:py-32">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-10">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-45 leading-8 sm:leading-10 text-color1 text-center mb-6">
          About Me
        </h2>
        <p className="text-color3 text-base sm:text-lg md:text-xl text-center mb-8">
          I'm a designer & developer with a passion for web design. I enjoy
          developing simple, clean, and slick websites that provide real value
          to the end user. Thousands of clients have procured exceptional
          results while working with me. Delivering work within time and budget,
          which meets clients' requirements, is our motto.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center text-base sm:text-lg md:text-xl">
            <p className="text-color3">Name:</p>
            <h2 className="font-semibold text-color1">Md. Shahriar Kabir</h2>
          </div>
          <div className="text-center text-base sm:text-lg md:text-xl">
            <p className="text-color3">Email:</p>
            <h2 className="font-semibold text-color1 text-base">
              shahriarkawsik@gmail.com
            </h2>
          </div>
          <div className="text-center text-base sm:text-lg md:text-xl">
            <p className="text-color3">Date of Birth:</p>
            <h2 className="font-semibold text-color1">25 February 2000</h2>
          </div>
          <div className="text-center text-base sm:text-lg md:text-xl">
            <p className="text-color3">From:</p>
            <h2 className="font-semibold text-color1">Sadar, Mymensingh</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
