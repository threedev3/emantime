import React from "react";

function CopyRight() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black p-3 max-w-full">
      <div className="mx-auto max-w-7xl">
        <p className="text-white text-center text-sm">
          © {currentYear} EmanTime. All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default CopyRight;
