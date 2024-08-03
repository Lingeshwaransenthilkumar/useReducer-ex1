
// like a cart

import { useState } from "react";



function Stateapp(){
    const [items,setItems]=useState([]);

    function addItem(itemName){
        console.log("what is item",itemName)
        setItems([...items,{id:Date.now(),name:itemName}])
        console.log("item stored succesfully",itemName.id)
        console.log(items.length)
    }
    
    function deleteItem(id){
        setItems(items.filter((item)=>item.id!==id))
    }
    
    function updateItem(id,itemName){ 
        setItems(items.map((item)=>(
            item.id===id ? {...item,name:itemName}:item)))
    }

    return(
        <>
        <h2>Product List</h2>
        <button onClick={()=>addItem(prompt("Enter item name : "))}>Add Item</button>

        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}
                <button onClick={()=>deleteItem(item.id)}>Delete me</button>
                <button onClick={()=>updateItem(item.id,prompt("enter item name",item.name))}>Update me</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Stateapp;