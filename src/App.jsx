import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import TalkToUs from "./components/TalkToUs";
import WorkDone from "./components/WorkDone";
import Footer from "./components/Footer";

import { useRef } from "react";

const App = () => {
  const targetRef = useRef(null);

  function scrollToCall() {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <Navbar scrollToCall={scrollToCall} />
      <Hero />
      <Expertise scrollToCall={scrollToCall} />
      <WorkDone />
      <TalkToUs targetRef={targetRef} />
      <Footer />
    </div>
  );
};

export default App;
