import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import bannerMain from "../../assets/img/bannermain.png";
import CourseCard from "../coursecard/CourseCard";
import TrialModal from "../trialModal/TrialModal";
import Slider from "react-slick";

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
      "Exclusively designed for sisters, our counselling sessions offer advice rooted in the teachings of the Quran and Hadith. Find solace, wisdom, and practical solutions to navigate through life’s complexities with divine guidance.",
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

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  // const [currentIndex, setCurrentIndex] = useState(1);
  // const scrollContainerRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  // const cardRef = useRef(null);

  // const scrollLeft = () => {
  //   console.log(currentIndex);
  //   const newIndex = currentIndex === 1 ? courses.length - 2 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  //   scrollToIndex(newIndex);
  // };

  // const scrollRight = () => {
  //   console.log("length", courses.length);
  //   console.log(currentIndex);
  //   const newIndex = currentIndex === courses.length - 2 ? 1 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  //   scrollToIndex(newIndex);
  // };

  // const scrollToIndex = (index) => {
  //   if (scrollContainerRef.current && cardRef.current) {
  //     const cardWidth = cardRef.current.clientWidth + 16;
  //     const scrollAmount = (index - 1) * cardWidth;
  //     scrollContainerRef.current.scrollTo({
  //       left: scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   scrollToIndex(currentIndex);
  // }, []);

  // const handleDotClick = (index) => {
  //   const newIndex = index + 1;
  //   setCurrentIndex(newIndex);
  //   scrollToIndex(newIndex);
  // };

  return (
    <div className="bg-white relative max-w-full">
      <div className="">
        <div className="relative isolate overflow-hidden bg-[url('/src/assets/img/carouselbg.png')] bg-no-repeat bg-cover bg-center px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:px-16 lg:pt-0">
          <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between md:gap-x-10">
            <div className="">
              <div className="max-w-md text-center lg:flex-auto lg:py-32 lg:text-left lg:px-8 sm:px-6 px-2">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Start your Quran Journey right now and get closer to Allah
                  Almighty!
                </h2>
                <p className="mt-6 text-lg leading-6 text-white font-normal">
                  Register now for the free trial and let us help you learn the
                  quran with proper tajweed just like the natives!
                </p>

                <div className="mt-4" onClick={() => setOpenModal(true)}>
                  <button className="p-2 px-6 bg-bannerText text-black font-medium rounded-full text-xl">
                    Book Free Trial Class
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between item-center gap-4">
              <div className="relative max-h-min h-auto lg:mt-8 flex flex-row justify-between items-center gap-4">
                {/* <div onClick={scrollLeft}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
                <div
                  className="overflow-x-scroll flex gap-4 no-scrollbar min-w-full"
                  ref={scrollContainerRef}
                >
                  {courses.map((item, index) => (
                    <div
                      ref={index === 0 ? cardRef : null}
                      key={item.id}
                      className="lg:min-w-xl min-w-full"
                    >
                      <CourseCard
                        title={item.title}
                        description={item.description}
                      />
                    </div>
                  ))}
                </div>
                <div onClick={scrollRight}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div> */}

                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                    <div>
                      <h3>5</h3>
                    </div>
                    <div>
                      <h3>6</h3>
                    </div>
                    <div>
                      <h3>7</h3>
                    </div>
                    <div>
                      <h3>8</h3>
                    </div>
                    <div>
                      <h3>9</h3>
                    </div>
                  </Slider>
                </div>
              </div>
              {/* <div className="flex justify-center mt-4 gap-3">
                {courses.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-3 w-3 rounded-full cursor-pointer ${
                      currentIndex === index + 1 ? "bg-black" : "bg-gray-400"
                    }`}
                  ></div>
                ))}
              </div> */}
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

export default Carousel;
