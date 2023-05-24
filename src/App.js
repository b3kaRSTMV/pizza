import "./scss/app.scss";
import Header from "./componets/Header";
import Sort from "./componets/Sort";
import Categories from "./componets/Categories";
import PizzaBlock from "./componets/PizzaBlock";
import React from "react";


function App() {

  const [items, setItems] = React.useState([]);


  React.useEffect(() => {
    fetch('https://646e2d419c677e23218b38c7.mockapi.io/items')
      .then(res => { return res.json(); })
      .then((arr) => {
        setItems(arr)
      })
  }, []);


  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top"></div>
            <Categories />
            <Sort />
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              {
                items.map((obj) => (
                  <PizzaBlock
                    key={obj.id}
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                    sizes={obj.sizes}
                    types={obj.types}

                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
