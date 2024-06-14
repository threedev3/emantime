import React, { useState } from "react";
import bannerMain from "../../assets/img/bannermain.png";
import TrialModal from "../trialModal/TrialModal";

function Banner() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-white relative max-w-full">
      <div className="">
        <div className="relative isolate overflow-hidden bg-[url('/src/assets/img/bannerimg.png')] bg-no-repeat bg-cover bg-center brightness-90 px-6 py-8 lg:pt-0 lg:py-8 shadow-2xl md:pt-16 ">
          <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:flex lg:items-center lg:justify-between lg:gap-x-8 lg:flex-row md:flex md:flex-col md:gap-y-10 sm:flex sm:flex-col sm:gap-y-10 sm:mx-auto">
            <div className="xl:max-w-2xl lg:max-w-lg max-w-full ">
              <div className="lg:flex-auto lg:py-16 lg:text-left md:max-w-full">
                <h2 className="font-bold tracking-wide text-bannerText text-4xl sm:text-7xl md:text-7xl lg:text-5xl xl:text-6xl">
                  Learn Quran Online with Tajweed
                </h2>
                <p className="sm:mt-6 mt-3 lg:text-lg md:text-xl sm:text-xl text-base  sm:leading-8 leading-7 text-white">
                  Learn Quran Online For Kids & Adults under the supervision of
                  Qualified Arab Tutors.
                </p>
                <p className="sm:mt-6 mt-3 lg:text-2xl md:text-3xl sm:text-3xl text-lg sm:leading-8 leading-7 tracking-wide text-white font-semibold">
                  3 Easy Steps to Start Free Trial of Quran Classes Online:
                </p>
                <div className="mt-4">
                  <ul>
                    <li className="flex flex-row items-center gap-2">
                      <span>
                        <svg
                          aria-hidden="true"
                          className="h-4 fill-white e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                      </span>
                      <span className="text-white sm:text-lg text-base">
                        Book Free Trial Class.
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <span>
                        <svg
                          aria-hidden="true"
                          className="h-4 fill-white e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                      </span>
                      <span className="text-white sm:text-lg text-base">
                        Schedule Class Day/Time.
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <span>
                        <svg
                          aria-hidden="true"
                          className="h-4 fill-white e-font-icon-svg e-fas-check-circle"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                      </span>
                      <span className="text-white sm:text-lg text-base">
                        Start a free 3 Days Quran Classes Online
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4" onClick={() => setOpenModal(true)}>
                  <button className="p-2 sm:px-6 px-4 bg-bannerText text-black font-medium rounded-full sm:text-lg text-base mt-3">
                    Book Free Trial Class
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative max-w-3xl h-full lg:mt-8 md:max-w-full md:flex md:justify-center ">
              <img
                className=" top-0 h-auto rounded-md "
                src={bannerMain}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      {
          openModal ? <TrialModal openModal={openModal} setOpenModal={setOpenModal} /> : null
        }
    </div>
  );
}

export default Banner;
