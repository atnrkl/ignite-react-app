import React from "react";
//pages
import HomePage from "./pages/HomePage";
//GlobalStyles
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <HomePage />
    </div>
  );
};

export default App;
