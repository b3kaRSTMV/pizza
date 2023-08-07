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
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="wrapper">
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
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
