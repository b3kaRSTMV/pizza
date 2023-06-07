import React from "react";
import Categories from "../componets/Categories";
import Sort from "../componets/Sort";
import PizzaBlock from "../componets/PizzaBlock";


const Home = () => {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        fetch('https://646e2d419c677e23218b38c7.mockapi.io/items')
            .then(res => { return res.json(); })
            .then((arr) => {
                setItems(arr)
            })
    }, []);
    return (

        <>

            <div class="content__top">
                <Categories />
                <Sort />
            </div>

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


        </>
    )
}
export default Home;