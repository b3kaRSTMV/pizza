import React from "react";
import Categories from "../componets/Categories";
import Sort from "../componets/Sort";
import PizzaBlock from "../componets/PizzaBlock";
import { useState } from "react";
import Pagination from "../componets/Pagination/Pagination";

const Home = ({searchValue}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'Популярности',
    sortProperty: 'rating',
  });

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `search=${searchValue }` : '';

  React.useEffect(() => {
    fetch(
      `https://646e2d419c677e23218b38c7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

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
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </>
  );
};
export default Home;
