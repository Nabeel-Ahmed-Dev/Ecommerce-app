"use client";

import { useEffect, useRef } from "react";
import "./styles.scss";
import { gsap, Expo } from "gsap";
import { loaderAnimation } from "@/utils/loaderAnimation";

const LoadingScreen = () => {
  const loadingEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loaderAnimation(() => {
      if (!loadingEl.current) return;
      loadingEl.current.style.display = "none";
    });
  }, []);

  return (
    <section className="loading__root" ref={loadingEl}>
      <div className="loading__container"></div>
    </section>
  );
};

export default LoadingScreen;
