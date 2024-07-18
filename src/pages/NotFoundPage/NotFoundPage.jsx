// src/components/RestrictedAccess.js
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 text-green-800">
      <div className="text-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">
          Sorry, this website is not available in your country.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
