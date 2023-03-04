import "./scss/app.scss";
import Header from "./componets/Header";
import Sort from "./componets/Sort";
import Categories from "./componets/Categories";
import PizzaBlock from "./componets/PizzaBlock"

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
           <PizzaBlock title="Мексиканская" price="500"/>
           <PizzaBlock/>
           <PizzaBlock/>
           <PizzaBlock/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
