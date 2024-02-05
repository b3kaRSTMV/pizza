import "./scss/app.scss";
import Header from "./componets/Header";
import React from "react";
import Home from "./pages/Home";
import NodeFound from "./pages/NodeFound";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './redux/slices/filter.Slice'

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

 

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<Home searchValue={searchValue} />}
                ></Route>
                <Route path="*" element={<NodeFound />}></Route>
              </Routes>
            </div>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
