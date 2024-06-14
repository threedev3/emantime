import React from "react";
import learnImg from '../../assets/img/learnimg.png'

function LearnQuran() {
  return (
    <div className="bg-white relative max-w-full">
      <div className="sm:pt-5 bg-[url('/src/assets/img/learnbg.png')] bg-no-repeat bg-cover bg-moveup">
        <div className="relative isolate overflow-hidden pl-6 shadow-2xl sm:pl-16 lg:pl-16 lg:pt-0">
          <div className="relative ml-auto max-w-full lg:flex lg:items-center lg:justify-between lg:gap-x-10">
            <div className="py-5 mr-auto">
              <div className="max-w-7xl md:max-w-lg text-base lg:max-w-2xl lg:text-lg lg:flex-auto lg:py-10 lg:text-left lg:pl-8 sm:pl-6 pl-2">
                <h2 className="leading-tight tracking-tight text-3xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text lg:text-4xl">
                  Learn Quran With Expert Male/Female Quran Tutors
                </h2>
                <p className="mt-6 loading-4 lg:text-lg lg-leading-8 text-black">
                  Welcome EmanTime, where you can learn the Quran with expert
                  tutors. Our comprehensive and tailored online Quran learning
                  program is specially designed to help you learn Quran
                  recitation with proper tajweed and even complete the whole
                  Quran memorization. With our experienced tutors, you will get
                  custom guidance and support to enhance your Quran recitation
                  skills.Whether you are a beginner or have prior knowledge, our
                  tutors will design the classes according to your level,
                  ensuring progress. Book your free trial now and embark on a
                  transformative journey of learning the Quran from the comfort
                  of your home. Experience the convenience of flexible schedules
                  and a user-friendly virtual learning environment. Start your
                  Quran learning journey with EmanTime and unlock the treasures
                  of divine knowledge of the Greatest book ever with our expert
                  tutors.
                </p>

              </div>
            </div>
            <div className="absolute right-0 h-3/4 top-0">
              <img src={learnImg} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnQuran;
