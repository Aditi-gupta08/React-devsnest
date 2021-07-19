import { Button} from '@material-ui/core';
import "../comp-styles/Item.css";

function Done({setIsediting, iname, ical, items, setItems, index}) {
    
    let onDone = () =>  {
        let obj = {
            name: iname,
            cal: ical
        }

        console.log(index, items);

        let newItems = [...items];
        newItems.splice(index, 1, obj);

        setItems(newItems);

        console.log(index, items);
        setIsediting(false);
    }

    return (
        <div className="done btn">
            <Button variant="contained" color="primary" onClick={onDone}>
                Done
            </Button>
        </div>
    );
}

export default Done;

