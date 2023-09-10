import RootTitle from "@/components/RootTitle/RootTitle";
import IntroSection from "@/sections/IntroSection/IntroSection";
import LoadingScreen from "@/sections/LoadingScreen/LoadingScreen";

export default function Home() {
  return (
    <>
      <RootTitle>
        <>
          <LoadingScreen />
          <IntroSection />
        </>
      </RootTitle>
    </>
  );
}
