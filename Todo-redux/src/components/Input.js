import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/counter/todoSlice';
import "./Input.css"


function Input() {
const [input, setinput] = useState(" ");
const dispatch=useDispatch()

let addTodo=()=>{


    dispatch(saveTodo({
        item:input,
        done:false,
        id:Date.now()
    }))

}

  return (
    <div className='input'>
        <input type="text" onChange={(e)=>setinput(e.target.value)}/>
        <button onClick={addTodo} >Add</button>
    </div>
  )
}

export default Input