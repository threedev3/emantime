import React, { useState } from "react";
import sideContact from "../../assets/img/sidecontact.png";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let errors = {};

    if (!fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!phone) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = "Phone Number must be digits only";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (!course) {
      errors.course = "Course selection is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Clear the form fields
      setFullName("");
      setPhone("");
      setEmail("");
      setCourse("");
      setErrors({});
    }
  };

  return (
    <div className="relative max-w-full">
      <div className="">
        <div className="relative isolate overflow-hidden py-4 md:pt-10 lg:py-4 ">
          <div className="max-w-full relative">
            <div className="mx-auto max-w-7xl lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-10 flex flex-col gap-5 justify-center items-center relative px-3 z-50">
              <div className="">
                <div className="max-w-3xl lg:flex-auto lg:py-32 lg:text-left lg:px-8 sm:px-6 px-2">
                  <h2 className="leading-tight tracking-tight text-3xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text lg:text-3xl ">
                    We'd Love Your To Hear Your Thoughts About EmanTime
                  </h2>
                  <h2 className="mt-6 text-base font-normal tracking-tight text-slate-700 sm:text-lg lg:text-lg">
                    Join millions of people from around the world learning the
                    Quran.
                  </h2>
                </div>
              </div>

              <div className="relative max-w-xl h-auto lg:mt-8 flex flex-col justify-center items-center mr-4">
                <div className=" pb-8">
                  <div className="mt-10 md:flex md:flex-col md:gap-4 flex flex-col gap-3">
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
                            autocomplete="given-name"
                            placeholder="Full Name"
                            className="block w-72 placeholder:text-lg rounded-full border-2 py-3.5 px-5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
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
                            autocomplete="phone-num"
                            placeholder="Phone Number"
                            pattern="[0-9]*"
                            className="block w-72 placeholder:text-lg rounded-full border-2 py-3.5 px-5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
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
                            autocomplete="given-email"
                            placeholder="Email"
                            className="block w-72 placeholder:text-lg rounded-full border-2 py-3.5 px-5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
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
                            className="block w-72 rounded-full border-2 py-3.5 px-5 pr-12 text-lg text-gray-900 shadow-sm sm:max-w-xs sm:leading-6 custom-select"
                            defaultValue="Interested Course"
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
                        <input
                          type="submit"
                          className="cursor-pointer bg-btnGradRight py-3 px-8 rounded-full text-white font-medium text-lg "
                          value="Submit"
                        />
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
