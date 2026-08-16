import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedImage from "./components/FeaturedImage";
import Projects from "./components/Projects";
import Studio from "./components/Studio";
import Services from "./components/Services";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedImage />
        <Projects />
        <Studio />
        <Services />
        <Process />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;