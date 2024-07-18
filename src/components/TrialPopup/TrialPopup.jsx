import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Description,
  Field,
  Input,
  Select,
  Radio,
  Label,
  RadioGroup,
} from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import popupImg from "../../assets/img/popupimg.png";
import useFormHandler from "../../hooks/useFormHandler";

export default function TrialPopup({ openModal, setOpenModal }) {
  const onSuccess = () => {
    setOpenModal(false);
  };

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
    loading,
    handleSubmit,
  } = useFormHandler();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, [setOpenModal]);

  return (
    <Transition appear show={openModal}>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={setOpenModal}
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full max-w-4xl mx-auto items-center justify-center ">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="relative mx-5 md:flex md:flex-row md:h-full flex flex-col max-h-[800px] w-full max-w-full rounded-xl bg-gradient-to-r from-green-100 to-gray-200 backdrop-blur-2xl overflow-auto">
                <button
                  className="absolute top-3 right-3 md:text-btnGradRight text-white cursor-pointer z-30"
                  onClick={() => setOpenModal(false)}
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
                {/* <button
                  className="absolute top-3 right-3 text-white hover:text-gray-700"
                  onClick={() => setOpenModal(false)}
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
                <div className="flex justify-center items-center bg-gradient-to-r from-btnGradRight to-btnGradLeft rounded-t-xl p-3">
                  <img src={whiteLogo} alt="" />
                </div> */}
                <div className="md:h-full md:w-full sm:h-[500px] h-[400px] w-full">
                  <img
                    src={popupImg}
                    alt=""
                    className="md:h-full md:w-full sm:h-[500px] h-[400px] w-full"
                  />
                </div>
                <div className="relative p-5 w-full flex flex-col justify-center items-center">
                  <DialogTitle
                    as="h3"
                    className="lg:text-4xl text-3xl font-semibold text-btnGradRight text-center"
                  >
                    <span className="italic lg:text-4xl text-3xl mr-1">07</span>{" "}
                    Days Trial Now!
                  </DialogTitle>
                  <p className="mt-2 sm:text-base text-sm text-black text-center">
                    Get Enrolled Now and find some special and amazing discounts
                  </p>
                  <div className="w-full max-w-md px-4">
                    <form onSubmit={(e) => handleSubmit(e, onSuccess)}>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        className={clsx(
                          "mt-3 block w-full rounded-lg bg-white py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      {errors.fullName && (
                        <p className="text-red-600 text-sm mt-2">
                          {errors.fullName}
                        </p>
                      )}
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className={clsx(
                          "mt-3 block w-full rounded-lg bg-white py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                      <Input
                        type="number"
                        placeholder="Phone Number"
                        className={clsx(
                          "mt-3 block w-full rounded-lg bg-white py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )}
                      <div className="relative">
                        <Select
                          className={clsx(
                            "mt-3 block w-full appearance-none rounded-lg bg-white py-1.5 px-3 text-sm/6 text-black",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                            // Make the text of each option black on Windows
                            "*:text-black"
                          )}
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                        >
                          <option value="" disabled>
                            Select Course
                          </option>
                          <option value="tajweed-course">Tajweed Course</option>
                          <option value="Seerat-Al-Nabwi Course">
                            Seerat Al Nabwi Course
                          </option>
                          <option value="One-To-One Councelling Session">
                            One-To-One Councelling Session
                          </option>
                          <option value="One-To-One Quran Recitation Course">
                            One-To-One Quran Recitation Course
                          </option>
                          <option value="Quran Memorization Course">
                            Quran Memorization Course
                          </option>
                          <option value="Islamic Studies Classes">
                            Islamic Studies Classes
                          </option>
                        </Select>
                        <ChevronDownIcon
                          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
                          aria-hidden="true"
                        />
                        {errors.course && (
                          <p className="text-red-600 text-sm mt-2">
                            {errors.course}
                          </p>
                        )}
                      </div>
                      {/* <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col px-4 py-2 bg-white rounded-lg mt-3">
                        <span className="text-gray-700 text-sm lg:mb-0 mb-1">
                          I Want To Enroll For?
                        </span>
                        <div className="flex justify-start gap-3 items-center space-x-2">
                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name="enroll"
                              value="myself"
                              checked={enrollFor === "myself"}
                              onChange={() => setEnrollFor("myself")}
                              className="checked:border-green-500 focus:border-green-500"
                            />
                            <span className="text-sm">My Self</span>
                          </label>
                          <label className="flex items-center space-x-1 ">
                            <input
                              type="radio"
                              name="enroll"
                              value="mychild"
                              checked={enrollFor === "mychild"}
                              onChange={() => setEnrollFor("mychild")}
                              className="text-green-500 focus:ring-green-500"
                            />
                            <span className="text-sm">My Child</span>
                          </label>
                        </div>
                        // {/* <button className="ml-auto bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600">
                        //   Start Now
                        // </button> */}
                      {/* </div> */}
                      <div className="mt-4 flex justify-center">
                        <Button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 w-72 rounded-full bg-gradient-to-r from-btnGradRight to-btnGradLeft py-2.5 px-4 sm:text-base text-sm font-medium text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white text-center"
                          onClick={close}
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
                            "Claim Your 7 days free trial"
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
