import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="section-card">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const router = useRouter();

  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityFourthSection, setOpacityFourthSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  const handleButtonClick = () => {
    router.push("/battles");
  };

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 6, 1 / 4));
    setOpacityThirdSection(scroll.curve(1 / 3, 1 / 2));
    setOpacityFourthSection(scroll.curve(1 / 2, 1 / 3));
    setOpacityLastSection(scroll.range(1 / 4, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section
          opacity={opacityFirstSection}
        >
          <div className="section-header">
            <h1 className=" animate-bounce section-header-text">
              Nerd Battles!
            </h1>
          </div>
          <ul className="leading-9">
            <ul className="section-text"> 
              Nerd Battles is a game where users can compete with other users in various games.
            </ul>

            <ul className="section-text mt-10"> Swipe to learn more about the games! </ul>
          </ul>
          <p className="animate-bounce  mt-2" style={{color:'white'}}>↓</p>
        </Section>
        <Section 
          right
          opacity={opacitySecondSection}
        >
          <div className="animate-bounce section-header">
            <h1 className="section-header-text">
              Code Battles!
            </h1>
          </div>
          <ul className="leading-9">
            <ul className="section-text"> 
              Nerd Battles is a game where users can compete with other users in various games.
            </ul>
            <div className="flex mt-10">
              <button onClick={handleButtonClick} className="play-button"> Play </button>
            </div>
          </ul>
        </Section>
        <Section 
          opacity={opacityThirdSection}
        >
          <div className="animate-bounce section-header">
            <h1 className="section-header-text">
              Type Battles!
            </h1>
          </div>
          <ul className="leading-9">
            <ul className="section-text"> 
              Nerd Battles is a game where users can compete with other users in various games.
            </ul>
            <div className="flex mt-10">
              <button onClick={handleButtonClick} className="play-button"> Play </button>
            </div>
          </ul>
        </Section>
        <Section 
          right
          opacity={opacityFourthSection}
        >
          <div className="animate-bounce section-header">
            <h1 className="section-header-text">
              Debug Battles!
            </h1>
          </div>
          <ul className="leading-9">
            <ul className="section-text"> 
              Nerd Battles is a game where users can compete with other users in various games.
            </ul>
            <div className="flex mt-10">
              <button onClick={handleButtonClick} className="play-button"> Play </button>
            </div>
          </ul>
        </Section>
        <Section 
          opacity={opacityLastSection}
        >
          <div className="animate-bounce section-header">
            <h1 className="section-header-text">
              Decrypt Battles!
            </h1>
          </div>
          <ul className="leading-9">
            <ul className="section-text"> 
              Nerd Battles is a game where users can compete with other users in various games.
            </ul>
            <div className="flex mt-10">
              <button onClick={handleButtonClick} className="play-button"> Play </button>
            </div>
          </ul>
        </Section>
      </div>
    </Scroll>
  );
};