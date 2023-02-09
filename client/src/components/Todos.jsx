import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <Stack key={todo.id} 
    margin="15px"
    className='todo-box'
    direction={"row"}
    boxShadow="rgba(0, 0, 0, 0.04) 0px 3px 5px;"
    >
        <Stack className='content'
        direction={"row"}>
            {editFormVisibility===false&&(
              <input type="checkbox" 
              checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}
              ></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </Stack>
        <Stack className='actions-box'>
              {editFormVisibility===false&&(
                <Stack
                direction={"row"}>
                  <EditIcon onClick={()=>handleEditClick(todo)}/>
                  <DeleteIcon onClick={()=>dispatch(removeTodo(todo.id))}/>
                </Stack>
              )}
        </Stack>
    </Stack>
  ))
}
