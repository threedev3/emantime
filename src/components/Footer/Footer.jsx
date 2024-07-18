import React from "react";
import whiteLogo from "../../assets/img/whitelogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white relative max-w-full">
      <div className="">
        <div className="relative isolate overflow-hidden bg-footerbg py-12 px-12 sm:px-16 md:pt-10 lg:px-16 ">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 md:grid md:grid-cols-3 md:gap-10 relative">
            <div className="flex gap-5 flex-col ">
              <div className="">
                <img src={whiteLogo} alt="" />
              </div>
              <div>
                <p className="text-white lg:text-base text-sm">
                  We are available 24/7, and the sign-up process is extremely
                  simple! For all new students, we provide 3 days Free trial of
                  Quran Classes.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-col ">
              <div className="">
                <h3 className="text-white text-xl font-semibold">
                  Quick Links
                </h3>
              </div>
              <div>
                <ul className="text-white lg:text-base text-sm flex flex-col gap-2">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/courses">
                    <li>Courses</li>
                  </Link>
                  <Link to="/pricing">
                    <li>Pricing</li>
                  </Link>
                  <Link to="/contact">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex gap-3 flex-col ">
              <div className="">
                <h3 className="text-white text-xl font-semibold">
                  Official Info
                </h3>
              </div>
              <div>
                <ul className="flex flex-col gap-2 ">
                  <li className="flex items-center gap-3">
                    <div>
                      <svg
                        aria-hidden="true"
                        className="h-4 fill-white e-font-icon-svg e-fab-whatsapp"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white lg:text-base text-sm">
                        +44 20 3289 4228
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
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
                      <p className="text-white lg:text-base text-sm">
                        +1 551-253-3039
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="white"
                        className="h-4 e-font-icon-svg e-fas-phone-alt"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white lg:text-base text-sm">
                        support@emantime.com
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <svg
                        aria-hidden="true"
                        className="h-4 fill-white e-font-icon-svg e-fas-map-marker-alt"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white lg:text-base text-sm">
                        20-22 , Wenlock Road , N1 7GU , London, UK
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
