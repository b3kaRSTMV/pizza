import "./scss/app.scss";
import Header from "./componets/Header";
import React from "react";
import Home from "./pages/Home";
import NodeFound from "./pages/NodeFound";
import { Routes, Route } from "react-router-dom";

function App() {
const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <div class="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div class="content">
          <div class="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />}></Route>
              <Route path="*" element={<NodeFound />}></Route>
            </Routes>

          </div>
        </div>
      </div>
    </div>
  ) ;
}


export default App;
