import React from "react";
import Feature1 from "../../assets/img/feature1.png";
import Feature2 from "../../assets/img/feature2.png";
import Feature3 from "../../assets/img/feature3.png";
import Feature4 from "../../assets/img/feature4.png";
import Feature5 from "../../assets/img/feature5.png";

function Features() {
  const featuresData = [
    {
      src: Feature1,
      text: "Online Panel",
    },
    {
      src: Feature2,
      text: "Multilingual Tutors",
    },
    {
      src: Feature3,
      text: "One to One Interactive Session",
    },
    {
      src: Feature4,
      text: "Evaluation Reports",
    },
    {
      src: Feature5,
      text: "Alternative Teachers",
    },
  ];

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
            <p className="mt-4 text-center sm:text-base text-sm font-normal">
              Register now for the free trial and let us help you learn the
              quran with proper tajweed just like the natives!
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

export default Features;
