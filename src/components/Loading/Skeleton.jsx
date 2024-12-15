import React from "react";

const Skeleton = () => {
  return (
    <div className="flex items-center justify-center w-full h-full mx-auto">
      <span className="mx-auto loading loading-spinner text-warning"></span>
    </div>
  );
};

export default Skeleton;
