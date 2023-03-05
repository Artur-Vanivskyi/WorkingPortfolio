import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Game from "./components/memory-game/Game.js";

const App = () => {

 const [showGame, setShowGame] = useState(false);

 const handleClickShow = () => {
  setShowGame(true)
 }


  return (
    <>
    
      <Header handleClickShow={handleClickShow}/>
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
     {showGame && <Game />}
      {/* <Game /> */}
     
    </>
  );
};

export default App;
