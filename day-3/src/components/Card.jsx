import "../styles/card.css";
import FoodBlock from "./FoodBlock";
import { cal_data } from "./data";
import { useState } from "react";


const Card = () => {

    let [items, setItems] = useState(cal_data);

    return(
        <div className="card">
            {
                items.map((food, index) => 
                <FoodBlock key={index} title={food.title} 
                cal={food.cal} index={index} items={items} setItems={setItems} /> )
            }
        </div>
    )
};


export default Card;