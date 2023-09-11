"use client";

import { loaderIntroAnimation } from "@/utils/loaderIntroAnimation";
import { useEffect, useRef } from "react";
import "./styles.scss";

const LoadingScreen = () => {
  const loadingEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loaderIntroAnimation(() => {
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
