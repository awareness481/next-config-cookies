import React from "react";
import { useGetCookie } from "../useGetCookie";

export default function One() {
  const firstCookie = useGetCookie("firstCookie");
  const secondCookie = useGetCookie("secondCookie");

  return (
    <div>
      firstCookie: {firstCookie}
      secondCookie: {secondCookie}
    </div>
  );
}
