import "../styles/card.css";

const  FoodBlock = (props) => {
    return(
    <div className="foodblock"> 
        <h1> {props.title} </h1>
        <h2> You have consumed {props.cal} cals today </h2>
    </div>
    )
}

const Card = () => {
    return(
        <div className="card">
            <FoodBlock title="Pizza" cal="56" />
            <FoodBlock title="Burger" cal="68" />
            <FoodBlock title="Coke" cal="500" />
            <FoodBlock title="Browne" cal="180" />
            <FoodBlock title="Fried Rice" cal="90" />
            <FoodBlock title="Lassania" cal="200" />
            <FoodBlock title="Pani Puri" cal="10" />
        </div>
    )
};


export default Card;