// src/App.jsx
import React from "react";
import Hero from "@/components/Home/Hero";

import About from "@/components/Home/About";
import Expertise from "@/components/Home/Expertise";
import Services from "@/components/Home/Services";

import Resources from "@/components/Home/Resources";
import Ecosystem from "@/components/Home/Ecosystem";

import Industries from "@/components/Home/Industries";
import CTA from "@/components/common/CTA";
import FAQ from "@/components/common/FAQ";
import Founder from "@/components/Home/Founder";

const App = () => {
  return (
    <>
      <Hero />

      <About />
      <Founder/>

      <Ecosystem />
      <Industries />

      <Expertise />

      <Services />

      <Resources />
      <FAQ/>

      <CTA />
    </>
  );
};

export default App;
