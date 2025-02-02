import React from "react";
import PurposeSection from "./components/PurposeSection";
import AITutorSection from "./components/AITutorSection";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Footer from './components/Footer';
import Lessons from './components/Lessons';
import Excerises from './components/Excerises';
import PythonSandbox from './components/pysand';
import { Element } from "react-scroll"; // Import Element for smooth scrolling

const App = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, rgb(52, 163, 233), rgb(118, 56, 243))",
      display: "flex",
      flexDirection: "column",
      margin: '0px',
    }}>
      <Navbar />
      <PurposeSection />
      <AITutorSection />
     

      {/* Lessons Section */}
      <Element name="lessons">
        <section > {/* Prevents content from being hidden under navbar */}
          <Lessons />
        </section>
      </Element>

      {/* Exercises Section */}
      <Element name="exercises">
        <section >
          <Excerises />
        </section>
      </Element>

      <PythonSandbox />
      <Description />
      <Footer />
    </div>
  );
};

export default App;
