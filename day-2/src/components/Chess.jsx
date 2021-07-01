import "../comp-styles/chess.css"


const Chess = () => {
    let n = 8;

    return(
        <div className="chess">

            {
                [...Array(n)].map((e, i) => <div className="rowx" key={i}>
                    {
                        [...Array(n)].map((e, i) =>
                        <div className="cellx" key={"cell"+i}> </div>)
                    }
                </div>)
            }
        </div>
    )
};


export default Chess;