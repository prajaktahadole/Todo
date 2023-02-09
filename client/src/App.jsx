import './App.css'
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';
import {useState} from 'react';
import { Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos state for conditional rendering
  const todos = useSelector((state)=>state.operationsReducer);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTodo state
  const [editTodo, setEditTodo]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

  return (
    <div className="wrapper">
    <br></br>
    
    <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
    cancelUpdate={cancelUpdate}/>
    <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
    {todos.length > 1 && (
      <Button 
      variant="contained" endIcon={<DeleteIcon/>}
      onClick={()=>dispatch(deleteAll())}>DELETE ALL</Button>
    )}
  </div>
  )
}

export default App
