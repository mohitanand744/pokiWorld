import React from "react";

const Skeleton = () => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <span className="loading loading-spinner text-warning"></span>
    </div>
  );
};

export default Skeleton;
