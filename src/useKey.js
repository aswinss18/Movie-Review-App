import React from "react";
import { useEffect } from "react";
export default function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code === key) {
          action();
        }
      }

      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
