import Root from "@/layout/Root/Root";
import "./styles.scss";
import Circle from "@/Icons/Circle";
import Underline from "@/Icons/Underline";

const IntroHeading = () => {
  return (
    <h1 className="intro__title">
      <span className="line">
        Where Your{" "}
        <span className="intro__text__home">
          <Circle />
          Home
        </span>{" "}
      </span>
      <br />
      <span className="line">
        Meets{" "}
        <span className="intro__text__imagination">
          <Underline />
          Imagination
        </span>
      </span>
    </h1>
  );
};

const IntroSection = () => {
  return (
    <Root>
      <IntroHeading />
    </Root>
  );
};

export default IntroSection;
