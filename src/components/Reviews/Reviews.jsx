import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import avatar from "../../assets/img/avatar.png";

function Reviews() {
  const reviews = [
    {
      id: 1,
      para: "You guys are truly blessed for me. May Allah swt accept and reward every second of your good deeds with his best Rahma.",
      dp: avatar,
      name: "Hamza",
      country: "USA",
    },
    {
      id: 2,
      para: "Assalamualeikum!! I'm happy to hear that mum's classes are going well, Alhamdulillah!",
      dp: avatar,
      name: "Ubaid",
      country: "Sweden",
    },
    {
      id: 3,
      para: "My daughter likes her classes a lot with the Arabic teacher.",
      dp: avatar,
      name: "Omer",
      country: "Pakistan",
    },
    
  ];

  // const [currentSlide, setCurrentSlide] = useState(0);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  // };

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    // <div className="max-w-full bg-[url('/src/assets/img/whychoose.png')] bg-no-repeat bg-cover bg-center py-16 flex flex-col justify-center items-center">
    //   <div className="max-w-7xl px-10 flex flex-col justify-center items-center gap-6">
    //     <div className="">
    //       <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft inline-block text-transparent bg-clip-text">
    //         What Students At EmanTime Say About Our Service
    //       </h2>
    //     </div>
    //     <div>
    //       <p className="mt-4 text-center text-lg font-normal">
    //         Your comments and thoughts are greatly appreciated. We can't thank
    //         you enough fortaking the time to provide feedback on how we can
    //         better serve you. We appreciate you writing in to tell us what you
    //         think.
    //       </p>
    //     </div>
    //     <div className="relative w-full overflow-hidden">
    //       <div className="flex justify-between items-center">
    //         <button onClick={prevSlide} className="arrow arrow-left">
    //           <i className="fi-arrow-left">←</i>
    //         </button>
    //         <div className="flex justify-center items-start mt-8 gap-5 w-full">
    //           {reviews.map((item, index) => (
    //             <div
    //               key={item.id}
    //               className={`transition-transform duration-500 ease-in-out transform ${
    //                 index === currentSlide ? "scale-100" : "scale-90"
    //               }`}
    //               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    //             >
    //               <ReviewCard
    //                 para={item.para}
    //                 dp={item.dp}
    //                 name={item.name}
    //                 country={item.country}
    //               />
    //             </div>
    //           ))}
    //         </div>
    //         <button onClick={nextSlide} className="arrow arrow-right">
    //           <i className="fi-arrow-right">→</i>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="flex justify-center my-4">
    //       {reviews.map((_, index) => (
    //         <div
    //           key={index}
    //           onClick={() => goToSlide(index)}
    //           className={`w-4 h-4 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
    //             index === currentSlide
    //               ? "bg-btnGradRight scale-150"
    //               : "bg-btnGradLeft"
    //           }`}
    //         ></div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-full bg-[url('/src/assets/img/whychoose.png')] bg-no-repeat bg-cover bg-center py-16 flex flex-col justify-center items-center">
      <div className="max-w-7xl px-10 flex flex-col justify-center items-center gap-6">
        <div>
          <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft inline-block text-transparent bg-clip-text">
            What Students At EmanTime Say About Our Service
          </h2>
        </div>
        <div>
          <p className="mt-4 text-center text-lg font-normal">
            Your comments and thoughts are greatly appreciated. We can't thank
            you enough for taking the time to provide feedback on how we can
            better serve you. We appreciate you writing in to tell us what you
            think.
          </p>
        </div>
        <div className="relative w-full flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg"
          >
            <i className="fi-arrow-left"></i>
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {reviews.map((item, index) => (
                <div key={item.id} className="flex-shrink-0 w-1/3 p-4">
                  <ReviewCard
                    para={item.para}
                    dp={item.dp}
                    name={item.name}
                    country={item.country}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg"
          >
            <i className="fi-arrow-right"></i>
          </button>
        </div>
        <div className="flex justify-center my-4">
          {reviews.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentSlide
                  ? "bg-btnGradRight scale-150"
                  : "bg-btnGradLeft"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
