import React from "react";

function FeatureCard({ title, description, cardbg }) {
  return (
    <div className={`p-6 ${cardbg} rounded-3xl lg:max-w-72 max-w-full `}>
      <div className="flex flex-col justify-between items-center gap-5 max-w-full">
        <div className="lg:min-h-14 min-h-8">
          <h2 className="sm:text-xl text-lg font-bold text-center text-slate-600">
            {title}
          </h2>
        </div>
        <div>
          <p className="sm:text-base text-sm font-normal text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
