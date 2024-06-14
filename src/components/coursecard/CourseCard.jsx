import React from "react";

function CourseCard({title, description}) {
  return (
    <div className="p-4 bg-cardbg rounded-xl lg:w-64 lg:min-h-96 min-w-full">
      <div className="flex flex-col justify-between items-center gap-5 max-w-full">
        <div>
          <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>
        <div>
          <p className="text-lg font-normal text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
