import React from "react";

const Skeleton = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-full h-[50vh]">
      <span className="mx-auto loading loading-spinner text-warning"></span>
    </div>
  );
};

export default Skeleton;
