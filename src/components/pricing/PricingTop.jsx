import React from "react";

function PricingTop({title}) {
  return (
    <div className="sm:py-8 sm:px-8 py-6 px-3 flex flex-col gap-5">
      <div>
        <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-btnGradRight to-btnGradLeft text-transparent bg-clip-text">
          {title}
        </h2>
      </div>
      <div>
        <p className="mt-4 text-center sm:text-lg text-base font-normal">
          For all new students, we provide a free one-week trial of Quran
          lessons.
          <span className="block">
            So what are youwaiting for? Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default PricingTop;
