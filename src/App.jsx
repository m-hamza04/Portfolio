import { Navbar } from "./components/Navbar";
import CanvasCursor from "./components/CanvasCursor";
import { Hero } from "./sections/Hero";
import About from "./sections/About";
import SkillSection from "./sections/SkillSection";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-bg text-text font-body relative">
      <CanvasCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillSection />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
