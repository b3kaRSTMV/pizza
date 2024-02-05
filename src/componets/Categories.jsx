import React from "react";

function Categories({ HomeCategoryId, HomeSetCategoryId }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетерианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      
      <ul>
        {categories.map((categoryName, i) => (
          

          <li
            key={i}
            onClick={() => HomeSetCategoryId(i)} //изменение состояния категории на выбранный. изменение происходит по индексу выбранной категории. в setState был индекс 0 после клика передался индекс кликуемого элемента. после чего useState стал другим вместо 0!!!
            className={HomeCategoryId === i ? "active" : ""}
          >
            {categoryName}
          </li>
         
        ))}
        
      </ul>
    </div>
    
  );
}
export default Categories;
