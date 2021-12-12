import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
