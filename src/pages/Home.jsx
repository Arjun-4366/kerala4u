import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Destinations from "../components/Destinations";
import Recommended from "../components/Recommended";

function Home() {
  


  return (
    <div>
      <NavBar />
      <main>
        <Main />
        <div>
          <Destinations />
          <Recommended />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
