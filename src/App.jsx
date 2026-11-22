import { useState, useEffect } from "react";
import { cn } from "cn";

import SplashCursor from "@components/react-bits/SplashCursor";

import useThemeStore from "@store/useThemeStore";

import Preloader from "@components/Preloader";
import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/About";
import Journey from "@components/Journey";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import Contact from "@components/Contact";

const App = () => {
  const { theme, setTheme } = useThemeStore();
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    setTheme(savedTheme || "dark");
  }, [setTheme]);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null;

  if (!isPreloaded)
    return <Preloader onPreloadCompleted={() => setIsPreloaded(true)} />;

  return (
    <div className="bg-(--bg-color)">
      <SplashCursor
        key={theme}
        rainbow={false}
        colors={[theme === "light" ? "#315f9b" : "#599bec"]}
        size={0.3}
        force={0.8}
        swirl={1}
        trail={2}
        clickSplash={false}
        colorSpeed={1}
        intensity={0.8}
        momentum={1}
        shading={0}
        glow={0}
        quality="high"
        intro
      />

      <Header />
      <div className="flex flex-col max-w-360 mx-auto gap-8 mt-20">
        <Hero />
        <div
          className={cn(
            "flex flex-col gap-24 z-99",
            "lg:ml-[50%] py-16 lg:pr-16 lg:pl-0",
            "px-8 sm:px-16 w-full lg:w-1/2",
          )}
        >
          <About />
          <Journey />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
