import { useEffect } from "react";

export const useScrollTop = (dependencyList = []) => {
  console.log("thiss: ", Element);
  useEffect(() => {
    window.scroll = {
      top: 0,
      behavior: "smooth",
    };
  }, dependencyList);
};
