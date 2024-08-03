import { useReducer} from "react";

const initialState = [
    {id:1,name:"Book"},
    {id:2,name:"pen"}
];
function reduce(state,action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state,{id:Date.now(),name:action.payload}]
        case "REMOVE_ITEM":
            return state.filter((item)=>item.id!==action.payload);
        case "UPDATE_ITEM":
            // id and newName
            return state.map((item)=>(item.id === action.payload.id ? {...state,name:action.payload.newName}:item));
        default:
            return state;
    }
}

function Reducerapp(){
    const [items,dispatch] = useReducer(reduce,initialState);
    return(
        <>
           <h1>To-do list using useReducer</h1>
           <h3>product list</h3>
           <button onClick={()=>dispatch({type:"ADD_ITEM",payload:prompt("enter the item name")})}>Add item</button>
           <ul>
            {items.map((item)=>
            (
                <li key={item.id}>{item.name}
                <button onClick={()=>dispatch({type:"UPDATE_ITEM",payload:{id:item.id,newName:prompt("Enter the name that to be upadated",item.name)}})} >Update</button>
                <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:item.id})}>Delete</button></li>
            )
            )}
           </ul>

        </>
    )

}

export default Reducerapp;