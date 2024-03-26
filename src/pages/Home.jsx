import React from "react";
import Categories from "../componets/Categories";
import Sort from "../componets/Sort";
import PizzaBlock from "../componets/PizzaBlock";
import { useState } from "react";
import Pagination from "../componets/Pagination/Pagination";
import { useSelector} from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filter.Slice";
import axios from "axios";

const Home = ({searchValue}) => {
const categoryId = useSelector(state => state.filter.categoryId);
const dispatch = useDispatch()
const sortType = useSelector(state => state.filter.sort.sortProperty)





const onChangeCategory = (id) => {
dispatch(setCategoryId(id));
}




  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  // const [categoryId, setCategoryId] = useState(0);
  // const [sortType, setSortType] = useState({
  //   name: 'Популярности',
  //   sortProperty: 'rating',
  // });

  const order = sortType.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `search=${searchValue }` : '';

  React.useEffect(() => {
    axios.get(`https://646e2d419c677e23218b38c7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    .then(res =>{
      setItems(res.data);
    })
  

    // fetch(
    //   `https://646e2d419c677e23218b38c7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //   });
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
          HomeCategoryId={categoryId}
          HomeSetCategoryId={onChangeCategory}
        />


        <Sort/>
   
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
