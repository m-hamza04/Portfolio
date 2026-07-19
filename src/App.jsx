import { Navbar } from "./components/Navbar";
import CanvasCursor from "./components/CanvasCursor";
import { Hero } from "./sections/Hero";
import About from "./sections/about";
import SkillSection from "./sections/SkillSection";

const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text font-body relative">
      <CanvasCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillSection />
      </main>
    </div>
  );
};

export default App;
