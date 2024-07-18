import React, { useState } from "react";
import learningPlatform from "../../assets/img/learning.png";
import tutorImg from "../../assets/img/tutor.png";
import TrialModal from "../trialModal/TrialModal";

function Mission() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-missionbg relative max-w-full">
      <div className="sm:pt-5">
        <div className="relative isolate overflow-hidden px-6 py-8 lg:pt-0 lg:py-8 shadow-2xl md:pt-8 flex flex-col gap-6">
          <div className="mx-auto flex flex-col justify-center items-center gap-10 md:flex md:flex-row md:items-center md:justify-between md:gap-x-10 sm:flex sm:flex-col sm:justify-center lg:max-w-7xl">
            <div className="">
              <div className="lg:max-w-2xl max-w-xl lg:flex-auto lg:flex lg:flex-col lg:gap-2 lg:py-8 lg:text-left lg:px-8 sm:px-6 px-2">
                <h2 className="text-2xl font-semibold text-slate-700 sm:text-3xl lg:text-2xl tracking-wide">
                  Our Mission
                </h2>
                <h2 className="text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text lg:leading-tight">
                  Best Islamic Platform For Learning
                </h2>
                <p className="mt-6 sm:text-base text-sm loading-3 text-black font-normal">
                  At EmanTime, our mission is to provide a seamless and
                  interactive learning experience for adults and children from
                  all over the world. Our goal is to make Quranic learning
                  accessible worldwide, connecting muslims with the holy book of
                  Allah through online Quran classes with our expert tutors who
                  are passionate about sharing their knowledge of the Quran.
                </p>

                <div className="mt-4" onClick={() => setOpenModal(true)}>
                  <button className="p-2 px-4 bg-gradient-to-r from-btnGradRight to-btnGradLeft text-white font-medium rounded-full sm:text-base text-sm">
                    Get Enrolled
                  </button>
                </div>
              </div>
            </div>

            <div className="relative max-w-xl lg:h-96 md:h-80 h-full  lg:mt-8">
              <img
                className="top-0 h-full rounded-md "
                src={learningPlatform}
                alt="App screenshot"
              />
            </div>
          </div>

          <div className="mx-auto flex flex-col justify-center items-center gap-10 md:flex md:flex-row md:items-center md:justify-between md:gap-x-10 sm:flex sm:flex-col sm:justify-center lg:max-w-7xl">
            <div className="relative lg:max-w-2xl h-auto lg:mt-8">
              <img
                className="top-0 h-full rounded-md  "
                src={tutorImg}
                alt="App screenshot"
              />
            </div>
            <div className="max-w-xl ">
              <div className="max-w-xl lg:flex-auto lg:flex lg:flex-col lg:gap-2  lg:text-left lg:px-8 sm:px-6 px-2">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text lg:leading-tight">
                  Learn Quran Online With The Best Tutors!
                </h2>
                <p className="mt-6 sm:text-base text-sm loading-3 text-black font-normal">
                  Learn Quran online with the correct method of Tajweed
                  recitation. Our professional tutors with several years of
                  experience are in a prime position forhelping you or your
                  child to Learn Quran Online. Our skilled and qualified Quran
                  teachers have the precise know-how of how to teach Quran
                  Online for kids and adults. Learn at your convenience. Your
                  location is no barrier as long as you have computer and
                  internet access. Register now and get a free one-week trial
                  right away!
                </p>

                <div className="mt-4" onClick={() => setOpenModal(true)}>
                  <button className="p-2 px-4 bg-gradient-to-r from-btnGradRight to-btnGradLeft text-white font-medium rounded-full sm:text-base text-sm">
                    Get Enrolled
                  </button>
                </div>
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

export default Mission;
