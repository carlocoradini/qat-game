import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import Game from "./pages/Game";

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <div className="App mx-4">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
