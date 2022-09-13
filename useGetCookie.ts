import { useState, useEffect } from "react";

export const useGetCookie = (id: string) => {
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    // eslint-disable-next-line prefer-destructuring
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(id));

    if (cookie) {
      setCookie(cookie.split("=")[1]);
    }
  }, [id]);

  return cookie;
};
