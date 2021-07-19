import { Input, Button, TextField } from '@material-ui/core';
import {useState} from "react";

import Delete from "./Delete";
import Edit from "./Edit";
import Done from "./Done";
import "../comp-styles/Item.css";

function Item({name, cal, index, items, setItems}) {
    
    let [iname, setIname] = useState(name);
    let [ical, setIcal] = useState(cal);
    let [isediting, setIsediting] = useState(false);

    return (
        <div className="item">
            <>
                { !isediting ? 
                    <div> 
                        <h3> {name} </h3>
                        <p> You have consumed {cal} calories </p> 
                    </div> :

                    <div className="editInputs">
                        <TextField required label="Item name" id="standard-size-small" size="small"
                        value={iname} onChange={(e) => setIname(e.target.value)}
                        />

                        <TextField required label="Calorie amount" id="standard-size-small"   size="small" 
                        type="number" value={ical} onChange={(e) => setIcal(e.target.value)}/>
                    </div>
                }
            </>
            

            <div className="btn-div"> 
                <Delete index={index} items={items} setItems={setItems} /> 
                <>
                    {   !isediting ?
                        <> 
                            <Edit setIsediting={setIsediting}/>
                        </> :
                        <> 
                            <Done setIsediting={setIsediting} iname={iname} ical={ical} 
                            items={items} setItems={setItems} index={index}/>
                        </>
                    }
                </>    
            </div>
        </div>
    );
}

export default Item;

