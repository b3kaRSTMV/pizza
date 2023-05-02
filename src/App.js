import "./scss/app.scss";
import Header from "./componets/Header";
import Sort from "./componets/Sort";
import Categories from "./componets/Categories";
import PizzaBlock from "./componets/PizzaBlock";
import Pizzas from "./componets/Pizza.json";


function App() {
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
                Pizzas.map((obj) => (
                  <PizzaBlock 
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
