import React from "react";
import Icon1 from "../../assets/img/icon1.png";
import Icon2 from "../../assets/img/icon2.png";
import Icon3 from "../../assets/img/icon3.png";
import Icon4 from "../../assets/img/icon4.png";
import Icon5 from "../../assets/img/icon5.png";
import chooseVector from "../../assets/img/choosevector.png";

function Choose() {
  const featuresData = [
    {
      src: Icon1,
      text: "Available 24/7",
    },
    {
      src: Icon2,
      text: "Expert Teachers",
    },
    {
      src: Icon3,
      text: "Get Free Trial For 7 Days",
    },
    {
      src: Icon4,
      text: "Mentorship",
    },
    {
      src: Icon5,
      text: "Certification",
    },
  ];

  return (
    <div className="max-w-full relative bg-[url('/src/assets/img/choosebg.png')]  bg-no-repeat bg-cover bg-center py-12 flex flex-col justify-center items-center  lg:py-24 ">
      <div className="bg-[url('/src/assets/img/choosevector.png')] bg-no-repeat absolute top-0 right-0  w-full h-full lg:w-1/3 md:w-1/2 sm:w-full  z-10"></div>
      <div className="max-w-full z-30">
        <div className="max-w-7xl px-4  flex flex-col justify-center items-center gap-6 z-10">
          <div className="">
            <h2 className="text-center sm:text-4xl text-3xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft inline-block text-transparent bg-clip-text">
              Why Choose Us?
            </h2>
          </div>
          <div>
            <p className="mt-4 text-center sm:text-base text-sm font-normal">
              Learn Quran online with the correct method of Tajweed recitation.
              Our professional tutors with several years of experience are in a
              prime position to help you or your child by conducting Online
              Quran Classes .
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 lg:justify-center lg:item-center mt-8 gap-10">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img src={feature.src} alt="" className="mb-4 h-24" />
                <p className="text-featureText font-semibold text-lg text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
