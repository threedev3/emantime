import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1128,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 796,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };

  return (
    <div className="max-w-full relative bg-[url('/src/assets/img/choosebg.png')]  bg-no-repeat bg-cover bg-center py-6 flex flex-col justify-center items-center lg:py-16">
      <div className="bg-[url('/src/assets/img/choosevector.png')] bg-no-repeat absolute top-0 right-0  w-full h-full lg:w-1/3 md:w-1/2 sm:w-full  z-10"></div>
      <div className="max-w-full z-30">
        <div className="max-w-7xl p-5  flex flex-col justify-center items-center gap-4">
          <div className="max-w-full flex flex-col justify-center items-center gap-4">
            <div className="">
              <h2 className="text-center lg:text-3xl sm:text-2xl text-xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft inline-block text-transparent bg-clip-text">
                What Students At EmanTime Say About Our Service
              </h2>
            </div>
            <div>
              <p className="mt-4 text-center sm:text-base text-sm font-normal">
                Your comments and thoughts are greatly appreciated. We can't
                thank you enough fortaking the time to provide feedback on how
                we can better serve you. We appreciate you writing in to tell us
                what you think
              </p>
            </div>
          </div>
          <div className="max-w-full ">
            <div className="slider-container">
              <Slider {...settings}>
                {reviews.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex gap-5 min-w-full mb-5  w-full"
                  >
                    <ReviewCard
                      para={item.para}
                      dp={item.dp}
                      name={item.name}
                      country={item.country}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="max-w-full bg-[url('/src/assets/img/whychoose.png')] bg-no-repeat bg-cover bg-center py-16 flex flex-col justify-center items-center">
    //   <div className="max-w-7xl px-10 flex flex-col justify-center items-center gap-6">
    //     <div>
    //       <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft inline-block text-transparent bg-clip-text">
    //         What Students At EmanTime Say About Our Service
    //       </h2>
    //     </div>
    //     <div>
    //       <p className="mt-4 text-center text-lg font-normal">
    //         Your comments and thoughts are greatly appreciated. We can't thank
    //         you enough for taking the time to provide feedback on how we can
    //         better serve you. We appreciate you writing in to tell us what you
    //         think.
    //       </p>
    //     </div>
    //     {/* <div className="relative w-full flex items-center">
    //       <button
    //         onClick={prevSlide}
    //         className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg"
    //       >
    //         <i className="fi-arrow-left"></i>
    //       </button>
    //       <div className="overflow-hidden w-full">
    //         <div
    //           className="flex transition-transform duration-500 ease-in-out"
    //           style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
    //         >
    //           {reviews.map((item, index) => (
    //             <div key={item.id} className="flex-shrink-0 w-1/3 p-4">
    //               <ReviewCard
    //                 para={item.para}
    //                 dp={item.dp}
    //                 name={item.name}
    //                 country={item.country}
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <button
    //         onClick={nextSlide}
    //         className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg"
    //       >
    //         <i className="fi-arrow-right"></i>
    //       </button>
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
    //     </div> */}
    //   </div>
    // </div>
  );
}

export default Reviews;
