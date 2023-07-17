import React from "react";
import Categories from "../componets/Categories";
import Sort from "../componets/Sort";
import PizzaBlock from "../componets/PizzaBlock";
import { useState } from "react";

const Home = ({searchValue}) => {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'Популярности',
    sortProperty: 'rating',
  });

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    fetch(
      `https://646e2d419c677e23218b38c7.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [categoryId, sortType]);

  const pizzas = items.filter(obj => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())){
      return true;
    }
    return false;
  }).map((obj) => (<PizzaBlock  key={obj.id} {...obj}/>))
  return (
    <>
      <div class="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>

      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {pizzas}
      </div>
    </>
  );
};
export default Home;
