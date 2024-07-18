import React, { useState } from "react";
import TrialModal from "../trialModal/TrialModal";
import { Link } from "react-router-dom";

function AnotherCourse({
  title,
  textColor,
  description,
  btn1,
  btn2,
  paraColor,
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="max-w-full relative bg-coursebg bg-[url('/src/assets/img/choosevector.png')] bg-no-repeat bg-contain bg-right-top py-16 w-full h-full lg:py-24 z-10 px-6">
      <div className="max-w-7xl mx-auto z-30">
        <div className="max-w-3xl">
          <div className="lg:flex-auto lg:flex lg:flex-col lg:gap-2  lg:text-left lg:px-8 sm:px-6 px-2">
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
                className="py-3 px-5 sm:py-3 sm:px-10 sm:flex-1 text-center lg:text-base text-sm md:py-2 md:px-6 lg:py-2 lg:px-8 rounded-full bg-gradient-to-r from-btnGradRight to-btnGradLeft border-2 border-white text-white"
              >
                <button>{btn1}</button>
              </div>
              <Link
                to="/pricing"
                className="py-3 px-5 sm:py-3 sm:px-10 sm:flex-1 text-center lg:text-base text-sm md:py-2 md:px-6 lg:py-2 lg:px-8 rounded-full bg-gradient-to-r from-btnGradRight to-btnGradLeft border-2 border-white text-white"
              >
                <div>
                  <button>{btn2}</button>
                </div>
              </Link>
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

export default AnotherCourse;
