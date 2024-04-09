"use client";
import React from "react";
import styles from "./loadingScreen.module.css";
import { useAppSelector } from "@/app/_redux/store";

const LoadingScreen = () => {
  const loader = useAppSelector((state) => state.loader);
  if (!loader.isShown) return null;

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingText}>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
