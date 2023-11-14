import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthenticationProvider } from "./context/authentication-context";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AuthenticationProvider>
        <AppRouter />
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
