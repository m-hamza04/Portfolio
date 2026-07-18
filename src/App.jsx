import React from "react";
import { Navbar } from "./components/Navbar";
import CanvasCursor from "./components/CanvasCursor";
import { Hero } from "./sections/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text font-body relative">
      <CanvasCursor />
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
