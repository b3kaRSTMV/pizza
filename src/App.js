import "./scss/app.scss";
import Header from "./componets/Header";
import React from "react";
import Home from "./pages/Home";
import NodeFound from "./pages/NodeFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<NodeFound />}></Route>
            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
