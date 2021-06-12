import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './todolist.css';

function TodoList() {
    const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
	
	const firstEvent = (event) => {
		setItem(event.target.value);
	}
	
	const secondEvent = () => {
		

		setNewItem((prev)=>{
			return [...prev, item]
		});
		
		setItem("");
		
	}
    return (
        <div>
            <br />
			<div className="childOne">
				<input type="text" value={item} placeholder="Add a task" onChange={firstEvent} />
				<Button className="AddBtn" onClick={secondEvent}>
					<AddIcon />
				</Button>
				
				<ul className="textFont">
					{
						newItem.map((val,index) => {
							return  <li key={index}>  {val} </li>
						})
					}
				</ul>
			</div>
        </div>
    )
}

export default TodoList
