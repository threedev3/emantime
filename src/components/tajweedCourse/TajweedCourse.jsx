import React, { useState } from "react";
import tutorImg from "../../assets/img/tutor.png";
import { Link } from "react-router-dom";
import TrialModal from "../trialModal/TrialModal";

function TajweedCourse({
  title,
  description,
  btn1,
  btn2,
  img,
  bg,
  textColor,
  order,
  paraColor,
}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={`${bg} relative max-w-full`}>
      <div className="sm:pt-5">
        <div className="relative isolate overflow-hidden px-6 py-8 lg:pt-0 lg:py-8 md:pt-8 flex flex-col gap-6">
          <div className="mx-auto flex flex-col justify-center items-center gap-10 md:flex md:flex-row md:items-center md:justify-between md:gap-x-10 sm:flex sm:flex-col sm:justify-center lg:max-w-7xl">
            <div className={`relative lg:max-w-xl h-3/4 lg:mt-8 ${order}`}>
              <img
                className="top-0 h-full rounded-md  "
                src={img}
                alt="App screenshot"
              />
            </div>
            <div className="max-w-2xl ">
              <div className="max-w-2xl lg:flex-auto lg:flex lg:flex-col lg:gap-2  lg:text-left lg:px-8 sm:px-6 px-2">
                <h2
                  className={`text-2xl font-bold sm:text-2xl lg:text-3xl ${textColor} lg:leading-tight`}
                >
                  {title}
                </h2>
                <p
                  className={`mt-6 lg:text-base text-sm loading-3 ${paraColor} font-normal`}
                >
                  {description}
                </p>

                <div className="mt-4 sm:flex sm:flex-row sm:gap-5 flex flex-col gap-3">
                  <div
                    onClick={() => setOpenModal(true)}
                    className="py-3 px-5 sm:py-3 sm:px-10 sm:flex-1 text-center lg:text-base text-sm md:py-2 md:px-2 lg:py-2 lg:px-8 rounded-full bg-gradient-to-r from-btnGradRight to-btnGradLeft border-2 border-white text-white"
                  >
                    <button>{btn1}</button>
                  </div>
                  <Link
                    to="/pricing"
                    className="py-3 px-5 sm:py-3 sm:px-10 sm:flex-1 text-center lg:text-base text-sm md:py-2 md:px-2 lg:py-2 lg:px-8 rounded-full bg-gradient-to-r from-btnGradRight to-btnGradLeft border-2 border-white text-white"
                  >
                    <div>
                      <button>{btn2}</button>
                    </div>
                  </Link>
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

export default TajweedCourse;
