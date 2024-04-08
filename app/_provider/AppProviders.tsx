"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/app/_redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-range-slider-input/dist/style.css";

const AppProviders = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProviders;
