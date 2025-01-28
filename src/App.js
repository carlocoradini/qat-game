import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <div className="App">
          <Navbar />
          <Outlet  />
          <Footer />
        </div>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
