import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { SnackbarProvider } from "./context/SnackbarContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter >
      <ThemeProvider>
        <SnackbarProvider>
         <CartProvider>
          <App />
         </CartProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);