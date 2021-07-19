import "../styles/card.css";

const FoodBlock = ({title, cal, index, items, setItems}) => {
    let handleClick = () => {
        let newList = items.filter((el, i) => i!=index);
        setItems(newList);
    }

    return(
    <div className="foodblock"> 
        <div className="div-1">
            <h1> {title} </h1> 
            <button className="dlt_btn" onClick={handleClick}> 
                Delete 
            </button>
        </div>

        <div className="div-2">
            <h2> You have consumed {cal} cals today </h2>
            {cal>100? <h3 className="cautious_txt"> Be Cautious!</h3>: <></>}
        </div>
        
    </div>
    )
}


export default FoodBlock