import { Fragment, useState } from "react";
// import {
//   Dialog,
//   DialogPanel,
//   DialogTitle,
//   Transition,
//   TransitionChild,
// } from "@headlessui/react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Description, Field, Input, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function TrialModal({ openModal, setOpenModal }) {
  return (
    // <Transition show={openModal}>
    //   <Dialog className="relative z-50" onClose={setOpenModal}>
    // <TransitionChild
    //   enter="ease-out duration-300"
    //   enterFrom="opacity-0"
    //   enterTo="opacity-100"
    //   leave="ease-in duration-200"
    //   leaveFrom="opacity-100"
    //   leaveTo="opacity-0"
    // >
    //   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    // </TransitionChild>

    //     <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    //       <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //         <TransitionChild
    //           enter="ease-out duration-300"
    //           enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    //           enterTo="opacity-100 translate-y-0 sm:scale-100"
    //           leave="ease-in duration-200"
    //           leaveFrom="opacity-100 translate-y-0 sm:scale-100"
    //           leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    //         >
    //           <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    //             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    //               <div className="sm:flex sm:items-start">
    //                 <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
    //                   <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
    //                 </div>
    //                 <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
    //                   <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
    //                     Deactivate account
    //                   </DialogTitle>
    //                   <div className="mt-2">
    //                     <p className="text-sm text-gray-500">
    //                       Are you sure you want to deactivate your account? All of your data will be permanently
    //                       removed. This action cannot be undone.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
    //               <button
    //                 type="button"
    //                 className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
    //                 onClick={() => setOpenModal(false)}
    //               >
    //                 Deactivate
    //               </button>
    //               <button
    //                 type="button"
    //                 className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
    //                 onClick={() => setOpenModal(false)}
    //                 data-autofocus
    //               >
    //                 Cancel
    //               </button>
    //             </div>
    //           </DialogPanel>
    //         </TransitionChild>
    //       </div>
    //     </div>
    //   </Dialog>
    // </Transition>

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
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-md rounded-xl bg-gray-200 p-6 backdrop-blur-2xl">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-semibold bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text text-center"
                >
                  Start Your 7 Day Trial
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-black text-center">
                  Your payment has been successfully submitted. We've sent you
                  an email with all of the details of your order.
                </p>
                <div className="w-full max-w-md px-4">
                  <Field>
                    <Input
                    placeholder="Full Name"
                      className={clsx(
                        "mt-3 block w-full rounded-lg border-2 border-black bg-white/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />
                    <Input
                    placeholder="Email Address"
                      className={clsx(
                        "mt-3 block w-full rounded-lg border-2 border-black bg-white/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />
                    <Input
                    placeholder="Phone Number"
                      className={clsx(
                        "mt-3 block w-full rounded-lg border-2 border-black bg-white/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                    />
                    <div className="relative">
                      <Select
                        className={clsx(
                          "mt-3 block w-full appearance-none rounded-lg border-2 border-black bg-white/5 py-1.5 px-3 text-sm/6 text-black",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                          // Make the text of each option black on Windows
                          "*:text-black"
                        )}
                      >
                        <option value="active">Tajweed Course</option>
                        <option value="paused">Seerat Al Nabwi Course</option>
                        <option value="delayed">One-To-One Councelling Session</option>
                        <option value="canceled">One-To-One Quran Recitation Course</option>
                        <option value="canceled">Quran Memorization Course</option>
                        <option value="canceled">Islamic Studies Classes</option>
                      </Select>
                      <ChevronDownIcon
                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
                        aria-hidden="true"
                      />
                    </div>
                  </Field>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-btnGradRight to-btnGradLeft py-2.5 px-4 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    onClick={close}
                  >
                    Get Enrolled
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
