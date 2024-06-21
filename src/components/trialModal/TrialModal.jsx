import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Description, Field, Input, Select } from "@headlessui/react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import whiteLogo from "../../assets/img/whitelogo.png";

export default function TrialModal({ openModal, setOpenModal }) {
  return (
    <Transition appear={true} show={openModal}>
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
          <div className="flex min-h-full items-center justify-center ">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="relative w-full mx-5 max-w-lg rounded-xl bg-gradient-to-r from-green-100 to-gray-200 backdrop-blur-2xl">
                <button
                  className="absolute top-3 right-3 text-white hover:text-gray-700 z-30"
                  onClick={() => setOpenModal(false)}
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
                <div className="flex justify-center items-center bg-gradient-to-r from-btnGradRight to-btnGradLeft rounded-t-xl p-3">
                  <img src={whiteLogo} alt="" />
                </div>
                <div className="p-5 ">
                  <DialogTitle
                    as="h3"
                    className="sm:text-3xl text-2xl font-semibold  bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text text-center"
                  >
                    Start Your 7 Day Trial
                  </DialogTitle>
                  <p className="mt-2 sm:text-base text-sm text-black text-center">
                    Get Enrolled Now and find some special and amazing discounts
                  </p>
                  <div className="w-full max-w-md px-4">
                    <form>
                      <Input
                        type="text"
                        required
                        placeholder="Full Name"
                        className={clsx(
                          "mt-3 block w-full rounded-full bg-white py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                      />
                      <Input
                        type="email"
                        required
                        placeholder="Email Address"
                        className={clsx(
                          "mt-3 block w-full rounded-full bg-white py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                      />
                      <Input
                        type="number"
                        required
                        placeholder="Phone Number"
                        className={clsx(
                          "mt-3 block w-full rounded-full bg-white py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                      />
                      <div className="relative">
                        <Select
                          required
                          className={clsx(
                            "mt-3 block w-full appearance-none rounded-full bg-white py-1.5 px-3 text-sm/6 text-black",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                            // Make the text of each option black on Windows
                            "*:text-black"
                          )}
                        >
                          <option value="active">Tajweed Course</option>
                          <option value="paused">Seerat Al Nabwi Course</option>
                          <option value="delayed">
                            One-To-One Councelling Session
                          </option>
                          <option value="canceled">
                            One-To-One Quran Recitation Course
                          </option>
                          <option value="canceled">
                            Quran Memorization Course
                          </option>
                          <option value="canceled">
                            Islamic Studies Classes
                          </option>
                        </Select>
                        <ChevronDownIcon
                          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-4 flex justify-center">
                        <Button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-btnGradRight to-btnGradLeft py-2.5 px-4 text-base font-medium text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mx-auto"
                          onClick={close}
                        >
                          Get Enrolled
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

    // <Transition appear show={openModal} as={Fragment}>
    //   <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
    //     <Transition.Child
    //       as={Fragment}
    //       enter="ease-out duration-300"
    //       enterFrom="opacity-0"
    //       enterTo="opacity-100"
    //       leave="ease-in duration-200"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     >
    //       <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
    //     </Transition.Child>

    //     <div className="fixed inset-0 overflow-y-auto">
    //       <div className="flex min-h-full items-center justify-center p-4 text-center">
    //         <Transition.Child
    //           as={Fragment}
    //           enter="ease-out duration-300"
    //           enterFrom="opacity-0 scale-95"
    //           enterTo="opacity-100 scale-100"
    //           leave="ease-in duration-200"
    //           leaveFrom="opacity-100 scale-100"
    //           leaveTo="opacity-0 scale-95"
    //         >
    //           <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
    //             <Dialog.Title
    //               as="h3"
    //               className="text-lg font-medium leading-6 text-gray-900"
    //             >
    //               Payment successful
    //             </Dialog.Title>
    //             <div className="mt-2">
    //               <p className="text-sm text-gray-500">
    //                 Your payment has been successfully submitted. We’ve sent you
    //                 an email with all of the details of your order.
    //               </p>
    //             </div>

    //             <div className="mt-4">
    //               <button
    //                 type="button"
    //                 className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    //                 onClick={() => setOpenModal(false)}
    //               >
    //                 Got it, thanks!
    //               </button>
    //             </div>
    //           </Dialog.Panel>
    //         </Transition.Child>
    //       </div>
    //     </div>
    //   </Dialog>
    // </Transition>
  );
}
