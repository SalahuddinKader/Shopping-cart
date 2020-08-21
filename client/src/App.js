import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Section, Footer } from "./component";
import { DataProvider } from "./component/context";

import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Section />
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
