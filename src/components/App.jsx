import React from "react";

import TitleSection from "./TitleSection.jsx";
import DisplaySection from "./DisplaySection.jsx";
import AboutSection from "./AboutSection.jsx";
import LocationSection from "./LocationSection.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="reactBody">
      <TitleSection />
      <DisplaySection />
      <AboutSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
