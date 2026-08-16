import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedImage from "./components/FeaturedImage";
import Projects from "./components/Projects";
import Studio from "./components/Studio";
import Services from "./components/Services";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CaseStudy from "./components/CaseStudy";

function Home() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aura-case-study" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;