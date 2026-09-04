import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { InternshipBanner } from "./components/InternshipBanner";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Projects />
        <InternshipBanner />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
