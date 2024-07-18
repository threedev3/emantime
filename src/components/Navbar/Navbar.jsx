import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import TrialModal from "../trialModal/TrialModal";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const handleNavClick = (href) => {
    setActiveItem(href);
    setIsMenuOpen(false);
  };

  const handleOutsideClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Disclosure as="nav" className="bg-whiteColor sticky top-0 z-40">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full lg:max-w-7xl px-2 py-6 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between md:justify-center">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img className="h-24 w-auto" src={Logo} alt="Eman Time" />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={classNames(
                          activeItem === item.href
                            ? "bg-activeColor text-white"
                            : "text-navText hover:bg-activeColor hover:text-white",
                          "rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={
                          activeItem === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <svg
                        aria-hidden="true"
                        className="h-4 fill-activeColor e-font-icon-svg e-fab-whatsapp"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">+44 20 3289 4228</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <svg
                        aria-hidden="true"
                        className="h-4 fill-activeColor e-font-icon-svg e-fas-phone-alt"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">+1 551-253-3039</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setOpenModal(!openModal)}
                    className="p-2 px-4 bg-gradient-to-r from-btnGradRight to-btnGradLeft text-white font-medium rounded-full hidden md:block"
                  >
                    Create Your Free Trial
                  </button>
                </div>

                <div className="order-last flex items-center lg:hidden">
                  <button
                    className="relative inline-flex items-center justify-center rounded-md p-2 bg-btnGradRight text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>

                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={isMenuOpen}
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="-translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="-translate-x-full opacity-0"
          >
            <div className="fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50"
                onClick={handleOutsideClick}
              />
              <div className="fixed inset-y-0 left-0 w-full sm:w-96 bg-white p-4 z-50 shadow-lg">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      <img className="h-32 w-auto" src={Logo} alt="Eman Time" />
                    </Link>
                  </div>
                  <button
                    className="relative inline-flex items-center justify-center rounded-md p-2 bg-btnGradRight text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>

                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="space-y-1 px-2 pb-3 pt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => {
                        handleNavClick(item.href);
                      }}
                      className={classNames(
                        activeItem === item.href
                          ? "bg-activeColor text-white"
                          : "text-navText hover:bg-activeColor hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={
                        activeItem === item.href ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-row mt-3 gap-2 items-center">
                  <div className="bg-activeColor p-2 rounded-full">
                    <svg
                      aria-hidden="true"
                      className="h-5 fill-white e-font-icon-svg e-fab-whatsapp"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>+44 20 3289 4228</p>
                  </div>
                </div>

                <div className="flex flex-row mt-3 gap-2 items-center">
                  <div className="bg-slate-600 p-2 rounded-full">
                    <svg
                      aria-hidden="true"
                      className="h-4 fill-white e-font-icon-svg e-fas-phone-alt"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>+1 551-253-3039</p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="p-2 px-4 mt-6 bg-gradient-to-r from-btnGradRight to-btnGradLeft text-white font-medium rounded-full"
                  >
                    Create Your Free Trial
                  </button>
                </div>
              </div>
            </div>
          </Transition>
          {openModal ? (
            <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
          ) : null}
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
