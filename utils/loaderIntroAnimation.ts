import { gsap, Expo } from ".";

export const loaderIntroAnimation = (onCompleteCallback: () => void) => {
  gsap
    .timeline()
    .to(
      ".loading__container",
      {
        delay: 1,
        scale: 0,
        duration: 1.4,
        ease: Expo.easeInOut,
        onComplete: onCompleteCallback,
      },
      "anim"
    )
    .to(
      ".root__title",
      {
        delay: 1,
        color: "black",
      },
      "anim+=0.7"
    )
    .to(
      ".root__title",
      {
        duration: 1.4,
        top: "50px",
        scale: 0.2,
        ease: Expo.easeInOut,
      },
      "-=0.3"
    )
    .to(
      [".navbar__menu__item", ".navbar__item"],
      {
        stagger: {
          from: "edges",
          each: 0.05,
        },
        duration: 2,
        y: 0,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: Expo.easeInOut,
      },
      "-=1.0"
    )
    .to(
      [".intro__title", ".intro__description"],
      {
        clipPath: "polygon(0 -100%, 100% -100%, 100% 200%, 0% 200%)",
        y: 0,
        stagger: 0.2,
        ease: Expo.easeInOut,

        duration: 4,
      },
      "-=2.5"
    )
    .to(
      [".intro__title__image1 img", ".intro__title__image2 img"],
      {
        // clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
        x: 0,
        ease: Expo.easeInOut,
        duration: 1,
      },
      "-=1.8"
    );
};
