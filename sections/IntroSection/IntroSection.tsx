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
    <Root className="intro__root">
      <div className="intro__title__root">
        <IntroHeading />
        <div className="intro__title__image1">
          <img src="/images/interior.jpg" alt="Interior Design" />
        </div>
      </div>
      <div className="intro__title__root2">
        <div className="intro__title__image2">
          <img src="/images/intro-sofa.png" alt="Sofa" />
        </div>
        <p className="intro__description">
          At DecorDreams, we turn your home aspirations into beautifully
          decorated realities. Explore, dream, decorate!
        </p>
      </div>
    </Root>
  );
};

export default IntroSection;
