import React from "react";

const useDebouncingSearch = (cb, time = 1000) => {
  let timerId;
  return (...argument) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...argument);
    }, time);
  };
};

export default useDebouncingSearch;
