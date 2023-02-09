import React,{useState, useEffect} from 'react'
import InputBase from '@mui/material/InputBase';
import { Button, Stack } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';

export const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {

  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoValue, setTodoValue]=useState('');

  // state for if someone changes the (to edit) value in update form
  const [editValue, setEditValue]=useState('');

  // useEffect is to show the (to edit) value in update form
  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  // normal add todo submit
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  // update form submit
  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility===false?(
        <form  onSubmit={handleSubmit}>
          <Stack className='input-and-btn'
                  direction={{ xs: 'row', sm: 'row' }}
                  sx={{ m: "40px", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", p: '4px 8px',  alignItems: 'center', width: 400 }}>
              <InputBase
               type="text" 
               className='form-control'
               sx={{ ml: 1, flex: 1 }}
               placeholder="Add your todo item "
               required
               value={todoValue} 
               onChange={(e)=>setTodoValue(e.target.value)}/>
              <Button type="submit" variant="contained" endIcon={<SaveIcon />}>Save</Button>
          </Stack>
        </form>
      ):(
        <form className='form-group custom-form' onSubmit={editSubmit}>
  
          <Stack className='input-and-btn'>
              <InputBase type="text" className='form-control' required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
              <Button type="submit" className='btn btn-secondary btn-md'>UPDATE</Button>
          </Stack>
          <Button type="button" className='btn btn-primary btn-md back-btn'
          onClick={cancelUpdate}>BACK</Button>
        </form>
      )}
    </>
  )
}
