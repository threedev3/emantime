import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import CourseCard from "../coursecard/CourseCard";
import TrialModal from "../trialModal/TrialModal";

function CarouselComp() {
  const [openModal, setOpenModal] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Seerat- Al-Nabawi Course",
      description:
        "This is a course by EmanTime for Sisters who aim to strengthen their love for the Prophet Muhammadصلى الله عليه وسلم, obtain a deeper knowledge of the Prophetic life and analyse the possibilities of restoring",
    },
    {
      id: 2,
      title: "One-To-One Quran Recitation Course",
      description:
        "At EmanTime, we provide several resources to sisters and children who seek to study Quran recitation. We have competent female Islamic tutors with remarkable knowledge of the Holy Quran.",
    },
    {
      id: 3,
      title: "One-To-One Counselling Sessions",
      description:
        "Exclusively designed for sisters, our counselling sessions offer advice rooted in the teachings of the Quran and Hadith. Find solace, wisdom, and practical solutions to navigate through life's complexities with divine guidance. navigate through life's complexities with divine guidance. navigate through life's complexities with divine guidance.",
    },
    {
      id: 4,
      title: "Islamic Studies Course",
      description:
        "Embark on a comprehensive Islamic studies course at Emantime. Our carefully designed course dives into the basic principles, history, and teachings of Islam, providing a strong foundation",
    },
    {
      id: 5,
      title: "Quran Memorization Course",
      description:
        "Our online Quran memorization program is curated to help you embark on a rewarding journey of memorising the Holy Book of Allah. With expert guidance and effective teaching methods.",
    },
    {
      id: 6,
      title: "Tajweed Course",
      description:
        "At EmanTime,we offer a comprehensive Tajweed course with our qualified female tutors to help you improve your Quran recitation and become a fluent rectiter of the Holy Quran.",
    },
  ];

  const settings = {
    dots: true,

    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
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
    <div className="bg-white relative max-w-full">
      <div className="">
        <div className="relative isolate overflow-hidden bg-[url('/src/assets/img/carouselbg.png')] bg-no-repeat bg-cover bg-center px-6 shadow-2xl sm:px-8 md:py-8 py-8 lg:px-16 lg:pt-0">
          <div className="mx-auto max-w-7xl md:flex md:flex-row md:items-center md:justify-between md:gap-x-10 flex flex-col gap-5 justify-center">
            <div className="">
              <div className="md:max-w-md max-w-full lg:flex-auto lg:py-32  lg:text-left lg:px-8 px-2">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                  Start your Quran Journey right now and get closer to Allah
                  Almighty!
                </h2>
                <p className="mt-6 sm:text-base text-sm leading-6 text-white font-normal">
                  Register now for the free trial and let us help you learn the
                  quran with proper tajweed just like the natives!
                </p>

                <div className="mt-4" onClick={() => setOpenModal(true)}>
                  <button className="xl:p-2 xl:px-6 lg:p-2 lg:px-4 p-2 px-3 bg-bannerText text-black font-medium rounded-full sm:text-base text-sm">
                    Book Free Trial Class
                  </button>
                </div>
              </div>
            </div>
            <div className="min-[1170px]:max-w-3xl lg:max-w-xl md:max-w-md max-w-full px-5">
              <div className="slider-container">
                <Slider {...settings}>
                  {courses.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex gap-5 min-w-full mb-5 lg:w-56 w-full"
                    >
                      <CourseCard
                        title={item.title}
                        description={item.description}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
}

export default CarouselComp;
