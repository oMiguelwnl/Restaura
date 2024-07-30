import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Dishes from "./components/Dishes";

function App() {
  return (
    <>
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <HeroSection />
        <NavBar />
        <Dishes />
      </main>
    </>
  );
}

export default App;
