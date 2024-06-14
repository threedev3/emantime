import React from "react";
import Feature1 from "../../assets/img/feature1.png";
import Feature2 from "../../assets/img/feature2.png";
import Feature3 from "../../assets/img/feature3.png";
import Feature4 from "../../assets/img/feature4.png";
import Feature5 from "../../assets/img/feature5.png";

function Features() {
  return (
    <div className="max-w-full relative bg-[url('/src/assets/img/choosebg.png')]  bg-no-repeat bg-cover bg-center py-12 flex flex-col justify-center items-center lg:py-16">
      <div className="bg-[url('/src/assets/img/choosevector.png')] bg-no-repeat absolute top-0 right-0  w-full h-full lg:w-1/3 md:w-1/2 sm:w-full  z-10"></div>
      <div className="max-w-full z-30">
        <div className="max-w-7xl px-10  flex flex-col justify-center items-center gap-6">
          <div className="">
            <h2 className="text-center sm:text-4xl text-4xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft inline-block text-transparent bg-clip-text">
              Features Which We Provide
            </h2>
          </div>
          <div>
            <p className="mt-4 text-center sm:text-lg text-base font-normal">
              Register now for the free trial and let us help you learn the
              quran with proper tajweed just like the natives!
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:flex lg:flex-row lg:justify-center lg:item-center mt-8 gap-10">
            <div className="flex flex-col items-center justify-center">
              <img src={Feature1} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Online Panel
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Feature2} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Multilingual Tutors
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Feature3} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                One to One <span className="block">Interactive Session</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Feature4} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Evaluation Reports
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={Feature5} alt="" className="mb-4 h-24" />
              <p className="text-featureText font-semibold text-xl text-center">
                Alternative Teachers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
