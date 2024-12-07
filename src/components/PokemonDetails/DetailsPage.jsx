import React from "react";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  return (
    <div role="alert" className="alert w-[97%] h-[47vh] mx-auto mt-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-6 h-6 stroke-info shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span className="font-bold text-white">
        {" "}
        Working on Pokemon Details Page
      </span>
      <div>
        <Link to="/">
          <button className="btn btn-sm btn-primary">
            Go Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
