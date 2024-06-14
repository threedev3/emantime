import React from "react";
import trialImg from "../../assets/img/trialimg.png";
import sideTrial from "../../assets/img/sidetrial.png";

function FreeTrial() {
  return (
    <div className="bg-white relative max-w-full">
      <div className="md:bg-[url('/src/assets/img/sidetrial.png')] md:bg-no-repeat md:bg-contain md:opacity-80 md:absolute md:left-0 bg-[url('/src/assets/img/sidecontact.png')] bg-no-repeat bg-contain opacity-80 absolute top-30 right-0 sm:top-0 md:right-0  w-2/12 h-full lg:w-1/3 sm:w-2/12 z-10"></div>
      <div className="max-w-full">
        <div className="relative isolate overflow-hidden bg-missionbg py-5 md:pt-10 lg:py-4 px-2">
          <div className="max-w-full relative ">
            <div className="mx-auto max-w-full lg:flex lg:flex-row lg:items-center lg:gap-x-10 flex flex-col justify-center items-center relative ">
              <div className="">
                <div className="max-w-4xl lg:flex-auto lg:py-32 lg:text-left lg:px-8 sm:px-6 px-2 relative z-50">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-700 sm:text-2xl lg:text-2xl relative z-50">
                    Embark on a spiritual journey with us!
                  </h2>
                  <h2 className="mt-6 leading-tight text-3xl lg:text-5xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text">
                    Start your one week free trial classes right now!
                  </h2>
                </div>
              </div>

              <div className="relative max-w-2xl h-auto lg:mt-8">
                <img src={trialImg} alt="" className="h-80" />
              </div>
            </div>

            {/* <div className="absolute lg:top-0 lg:left-0 sm:top-0 sm:right-0 -z-10">
              <img src={sideTrial} alt="" className="w-full h-96" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeTrial;
