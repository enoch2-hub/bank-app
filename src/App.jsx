import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Business from "./components/Business/Business";
import OnlineBz from "./components/OnlineBz/OnlineBz";
import Comments from "./components/Comments/Comments";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=""></div>
      <Navbar />
      <Hero />
      <Stats />
      {/* <Business/> */}
      {/* <OnlineBz/> */}
      <Comments />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
