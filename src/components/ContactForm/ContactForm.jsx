import React, { useState } from "react";
import sideContact from "../../assets/img/sidecontact.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import useFormHandler from "../../hooks/useFormHandler";

function ContactForm() {
  const {
    fullName,
    setFullName,
    phone,
    setPhone,
    email,
    setEmail,
    course,
    setCourse,
    errors,
    handleSubmit,
    loading,
  } = useFormHandler();

  return (
    <div className="relative max-w-full">
      {/* <Toaster position="top-center" /> */}

      <div className="">
        <div className="relative isolate overflow-hidden py-4 md:pt-10 lg:py-4 ">
          <div className="max-w-full relative">
            <div className="mx-auto max-w-7xl lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-10 flex flex-col gap-5 justify-center items-center relative px-3 z-50">
              <div className="">
                <div className="max-w-3xl lg:flex-auto lg:py-32 lg:text-left lg:px-8 sm:px-6 px-2">
                  <h2 className="leading-tight tracking-tight text-xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text sm:text-2xl lg:text-3xl ">
                    We'd Love Your To Hear Your Thoughts About EmanTime
                  </h2>
                  <h2 className="mt-6 text-sm font-normal tracking-tight text-slate-700 sm:text-base">
                    Join millions of people from around the world learning the
                    Quran.
                  </h2>
                </div>
              </div>

              <div className="relative max-w-xl h-auto lg:mt-8 flex flex-col justify-center items-center mr-4">
                <div className=" pb-8">
                  <div className=" md:flex md:flex-col md:gap-4 flex flex-col gap-3">
                    <form
                      onSubmit={handleSubmit}
                      className="mt-10 md:flex md:flex-col md:gap-4 flex flex-col gap-3"
                    >
                      <div className="md:flex md:flex-row md:gap-5 flex flex-col gap-3">
                        <div className="mt-2">
                          <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            autoComplete="given-name"
                            placeholder="Full Name"
                            className="block w-72 placeholder:text-lg rounded-full border-2 sm:py-3 py-2 px-5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                          {errors.fullName && (
                            <p className="text-red-600 text-sm mt-2">
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div className="mt-2">
                          <input
                            type="number"
                            name="phone-num"
                            id="phone-num"
                            autoComplete="phone-num"
                            placeholder="Phone Number"
                            pattern="[0-9]*"
                            className="block w-72 placeholder:text-lg rounded-full border-2 sm:py-3 py-2 px-5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          {errors.phone && (
                            <p className="text-red-600 text-sm mt-2">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="md:flex md:flex-row md:gap-5 flex flex-col gap-3">
                        <div className="mt-2">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="given-email"
                            placeholder="Email"
                            className="block w-72 placeholder:text-lg rounded-full border-2 sm:py-3 py-2 px-5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <p className="text-red-600 text-sm mt-2">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div className="mt-2">
                          <select
                            id="course"
                            name="course"
                            className="block w-72 rounded-full border-2 sm:py-3 py-2 px-5 pr-12 text-lg text-gray-900 shadow-sm sm:max-w-xs sm:leading-6 custom-select"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                          >
                            <option className="text-lg" value="" disabled>
                              Select Course
                            </option>
                            <option className="text-lg" value="tajweed course">
                              Tajweed Course
                            </option>
                            <option
                              className="text-lg"
                              value="seerat-al-nabawi course"
                            >
                              Seerat-Al-Nabawi Course
                            </option>
                            <option
                              className="text-lg"
                              value="one-to-one counselling sessions"
                            >
                              One-To-One Counselling Sessions
                            </option>
                            <option
                              className="text-lg"
                              value="one-to-one quren recitation course"
                            >
                              One-To-One Quran Recitation Course
                            </option>
                            <option
                              className="text-lg"
                              value="quran memorization course"
                            >
                              Quran Memorization Course
                            </option>
                            <option
                              className="text-lg"
                              value="islamic studies course"
                            >
                              Islamic Studies Course
                            </option>
                          </select>
                          {errors.course && (
                            <p className="text-red-600 text-sm mt-2">
                              {errors.course}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mx-auto">
                        <button
                          type="submit"
                          className="cursor-pointer bg-btnGradRight py-3 rounded-full text-white font-medium text-lg w-32 inline-flex items-center justify-center"
                          disabled={loading}
                        >
                          {loading ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="animate-spin h-8 w-8"
                              fill="white"
                            >
                              <path
                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                opacity=".25"
                              />
                              <path
                                d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                className="spinner_ajPY"
                              />
                            </svg>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:absolute md:top-0 md:right-0 absolute top-20 right-0 z-10">
              <img src={sideContact} alt="" className="w-full sm:h-96 h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
