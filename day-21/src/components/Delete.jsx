import { Input, Button, TextField } from '@material-ui/core';
import {useState} from "react";
import "../comp-styles/Item.css";

function Delete({index, items, setItems}) {
    
    let onDelete = () =>  {
        let newItemList = items.filter( (el,i) => i!=index)
        setItems(newItemList);
    }

    return (
        <div className="delete btn">
            <Button variant="contained" color="secondary" onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
}

export default Delete;

