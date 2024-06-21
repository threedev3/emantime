import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ title, description }) {
  return (
    <Link to="/courses"><div className="p-4 bg-cardbg rounded-xl lg:w-56 lg:min-h-96 min-h-full max-h-full w-11/12 mx-auto">
      <div className="flex flex-col justify-between items-center gap-5 max-w-full h-full">
        <div className="w-full lg:min-h-16 min-h-12">
          <h2 className="text-xl font-bold text-center lg:line-clamp-2 line-clamp-3">
            {title}
          </h2>
        </div>
        <div className="flex-grow w-full overflow-hidden">
          <p className="text-lg font-normal text-center lg:line-clamp-[9] line-clamp-[6] overflow-y-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default CourseCard;
