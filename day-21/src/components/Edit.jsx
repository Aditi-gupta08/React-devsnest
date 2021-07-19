import { Input, Button, TextField } from '@material-ui/core';
import {useState} from "react";
import "../comp-styles/Item.css";

function Edit({setIsediting}) {
    
    let onEdit = () =>  {
        setIsediting(true);
    }

    return (
        <div className="edit btn">
            <Button variant="contained" color="primary" onClick={onEdit}>
                Edit
            </Button>
        </div>
    );
}

export default Edit;

