import React from "react";

import "./styles.scss";

interface RootProps {
  children: React.ReactNode;
  className?: string;
}

const Root = ({ children, className = "" }: RootProps) => {
  return <section className={`${className} section__root`}>{children}</section>;
};

export default Root;
