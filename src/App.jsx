import { useReducer } from "react";

const initialState = [];

// state is used to get previous state
function reducer(state,action){
  switch(action.type){
    case 'ADD_TASK':
      // return prev states,id and name
      return [...state,{id:state.length+1,name:action.payload}]

    case 'DELETE_TASK':
      // used to give all the states with out including the current id
      return state.filter((task)=>task.id !== action.payload);
    default:
      return state
  }
}

// additional parameter to use for logic
function init(initialState){
  // add new data to initial state and to present new state and initial states too
  const data = [...initialState,{id:1,name:"reading"}];
  return data
}

function App(){
  // state and function as parameter & dispatch works ad reducer function
  const [state,dispatch] = useReducer(reducer,initialState,init);

  function handleChange(e){
    //console.log(e.target.value);
    if (e.key==="Enter"){
      // dispatch is used to do the action
      dispatch({type:"ADD_TASK",payload:e.target.value})
    }
  }

  function deleteTask(id){
    dispatch({type:"DELETE_TASK",payload:id});
  }
  return(
    <>
    <h1>Task List {state.length}</h1>
    <label htmlFor="task">Enter Task</label>
    <input type="text" id="task" onKeyDown={(e)=>{handleChange(e)}}/>
    {state.map((item)=>(
      <li key={item.id}>{item.name} <button onClick={()=>(deleteTask(item.id))}>Delete Me</button></li>  
    ))}
    </>
  )
}

export default App;