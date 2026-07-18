import React from "react";
import { Navbar } from "./components/Navbar";
import CanvasCursor from "./components/CanvasCursor";

const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text font-body relative">
      <CanvasCursor />
      <Navbar />
    </div>
  );
};

export default App;
