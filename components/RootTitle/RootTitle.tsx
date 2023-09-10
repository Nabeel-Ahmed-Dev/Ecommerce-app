"use client";

import Navbar from "../Navbar/Navbar";
import "./styles.scss";

interface RootTitleProps {
  children: JSX.Element;
}

const RootTitle = ({ children }: RootTitleProps) => {
  return (
    <div className="root">
      <Navbar />
      <h1 className="root__title">
        <span>Décor</span>
        <span>Dreams</span>
      </h1>
      {children}
    </div>
  );
};

export default RootTitle;
