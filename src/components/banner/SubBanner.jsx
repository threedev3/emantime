import React from "react";

function SubBanner({ course }) {
  return (
    <div className="bg-white relative max-w-full">
      <div className="sm:pt-3">
        <div className="relative min-h-96 isolate overflow-hidden bg-[url('/src/assets/img/greenbg.png')] bg-no-repeat bg-cover bg-center brightness-90 py-8 lg:pt-0 lg:py-8  md:pt-16 ">
          <div className="absolute bottom-0  bg-[url('/src/assets/img/bannermosque.png')] bg-no-repeat bg-cover bg-center h-96  w-full sm:mx-auto contrast-200 brightness-75 opacity-20"></div>
          <div className="flex justify-center items-center h-96">
            <h3 className="text-5xl text-white opacity-100 font-semibold tracking-wide">
              {course}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubBanner;
