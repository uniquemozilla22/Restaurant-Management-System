import { useState } from "react";

const setItem = (key: string, value: any, numberOfDays: number) => {
  const now = new Date();
  // set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
  document.cookie = `${key}=${value};expires=${now.toUTCString()}; path=/`;
};

const getItem = (key: string) =>
  document.cookie.split("; ").reduce((total, currentCookie) => {
    const item = currentCookie.split("=");
    const storedKey = item[0];
    const storedValue = item[1];
    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, "");

const useCookie = (key: string, defaultValue: any) => {
  const getCookie = () => getItem(key) || defaultValue || JSON.stringify({});
  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value: string, numberOfDays: number) => {
    setCookie(JSON.stringify(value));
    setItem(key, JSON.stringify(value), numberOfDays || 1);
  };
  const eraseCookie = () => {
    document.cookie = key + "=; Max-Age=1";
  };

  return [JSON.parse(cookie), updateCookie, eraseCookie];
};

export default useCookie;
