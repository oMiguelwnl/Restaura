import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";

function App() {
  return (
    <>
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <HeroSection />
        <NavBar />
        <Dishes />
        <About />
        <Mission />
      </main>
    </>
  );
}

export default App;
