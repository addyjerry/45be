import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Body/Home";
import Gallery from "./components/Body/Gallery";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router ,Routes, Route  } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Gallery' element={<Gallery />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
