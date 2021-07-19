import { Input, Button, TextField } from '@material-ui/core';
import {useState} from "react";

import Item from "./Item";
import "../comp-styles/Page.css";

function Page() {
    let [name, setName] = useState("");
    let [cal, setCal] = useState("");
    let [items, setItems] = useState([]);

    let resetFields = () => {
        setName("");
        setCal("");
    }

    let onAdd = () => {
        let newItem = {"name": name, "cal": cal};
        setItems([...items, newItem]);
        resetFields();
    }

    return (
        <div className="page">
            <form className="form">
                <div>
                    <TextField required label="Item name" id="outlined-size-small" variant="outlined" size="small"
                    value={name} onChange={(e) => setName(e.target.value)}
                     />

                    <TextField required label="Calorie amount" id="outlined-size-small" variant="outlined" size="small" 
                     type="number" value={cal} onChange={(e) => setCal(e.target.value)}/>
                </div>

                <Button variant="contained" color="primary" 
                style={{width: '445px', marginTop: '10px'}} 
                onClick={onAdd}>
                    Add Item
                </Button>
            </form>

            <div className="items-list">
                {items.map( (item, index) => 
                <Item key={index} name={item.name} cal={item.cal} index={index}
                      items={items} setItems={setItems}/> )}
            </div>
        </div>
    );
}

export default Page;

