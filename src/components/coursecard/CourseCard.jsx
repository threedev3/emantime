import React from "react";

function CourseCard({ title, description }) {
  return (
    <div className="p-4 bg-cardbg rounded-xl lg:w-56 lg:min-h-96 min-h-80 max-h-96 w-4/5 mx-auto">
      <div className="flex flex-col justify-between items-center gap-5 max-w-full h-full">
        <div className="w-full min-h-20">
          <h2 className="text-xl font-bold text-center lg:line-clamp-3 line-clamp-2">
            {title}
          </h2>
        </div>
        <div className="flex-grow w-full overflow-hidden">
          <p className="text-lg font-normal text-center lg:line-clamp-[9] line-clamp-6 overflow-y-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
