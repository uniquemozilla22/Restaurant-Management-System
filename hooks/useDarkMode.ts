import { useState } from "react";
import useCookie from "./useCookie";

const setMode = (set: void, dark: boolean) => {
  return set(dark);
};

const useDarkMode = () => {
  const [dark, changeMode, deleteDark] = useCookie("dark", false);

  return [darkMode, setMode(changeMode, dark)];
};


changes
