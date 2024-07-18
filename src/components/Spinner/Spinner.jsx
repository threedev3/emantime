// src/components/Spinner.jsx
import React from "react";
import Logo from "../../assets/img/logo.png";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div> */}
      <img src={Logo} alt="" className="animate-pulse" />
    </div>
  );
};

export default Spinner;
