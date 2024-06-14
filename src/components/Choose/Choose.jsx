import React from "react";
import Icon1 from "../../assets/img/icon1.png";
import Icon2 from "../../assets/img/icon2.png";
import Icon3 from "../../assets/img/icon3.png";
import Icon4 from "../../assets/img/icon4.png";
import Icon5 from "../../assets/img/icon5.png";
import chooseVector from "../../assets/img/choosevector.png";

function Choose() {
  return (
    <div className="max-w-full relative bg-[url('/src/assets/img/choosebg.png')]  bg-no-repeat bg-cover bg-center py-12 flex flex-col justify-center items-center  lg:py-24 ">
      <div className="bg-[url('/src/assets/img/choosevector.png')] bg-no-repeat absolute top-0 right-0  w-full h-full lg:w-1/3 md:w-1/2 sm:w-full  z-10">

      </div>
      <div className="max-w-full z-30">
        <div className="max-w-7xl px-4  flex flex-col justify-center items-center gap-6 z-10">
          <div className="">
            <h2 className="text-center sm:text-4xl text-3xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft inline-block text-transparent bg-clip-text">
              Why Choose Us?
            </h2>
          </div>
          <div>
            <p className="mt-4 text-center sm:text-lg text-base font-normal">
              Learn Quran online with the correct method of Tajweed recitation.
              Our professional tutors with several years of experience are in a
              prime position to help you or your child by conducting Online
              Quran Classes .
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:flex lg:flex-row lg:justify-center lg:item-center mt-8 gap-20">
            <div className="flex flex-col items-center justify-center">
              <img src={Icon1} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Available 24/7
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Icon2} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Expert Teachers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Icon3} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Get Free Trial For 7 Days
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Icon4} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Mentorship
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Icon5} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Certification
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Choose;
