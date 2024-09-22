import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Person from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { FavouriteFood } from "./FavouriteFood.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavouriteFood></FavouriteFood>
    <Person></Person>
  </StrictMode>
);
