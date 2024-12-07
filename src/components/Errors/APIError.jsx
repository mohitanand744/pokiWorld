import React from "react";

const APIError = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-5 py-3 mx-auto border-2 border-red-500 shadow-lg rounded-2xl w-96 shadow-red-600">
      <p className="text-center">Something went wrong</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 text-white bg-red-600 btn"
      >
        Refresh Page
      </button>
    </div>
  );
};

export default APIError;
