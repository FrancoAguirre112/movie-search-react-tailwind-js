import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
import { FavoritesContextProvider } from "./contexts/favoritesContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
