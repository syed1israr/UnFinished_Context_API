import React from 'react'
import { useState } from 'react'
import {Todoprovider} from './context/index'
import { useEffect } from 'react';
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem';

function App() {
  const [todos,settodos]=useState([]);
  const addTodo= (todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo}, ...prev])
  }


const updateTodo=(id, todo)=>{
  settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id=== id ? todo : prevtodo)))
}


const deleteTodo=(id)=>{
  settodos((prev)=> prev.filter((todo)=>todo.id!==id))
}

const  toggleComplete =(id)=>{
    settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id ? {...prevtodo,completed : !prevtodo.completed}:prevtodo  ))
}

const handling=localStorage.getItem(todos);
useEffect(() => {
  
 const todos = JSON.parse(handling)

  if(todos && todos.length>0){
    settodos(todos);
  }
}, [])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <Todoprovider value={{addTodo,updateTodo,todos,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
           <TodoForm/>
            
        </div>
        <div className="flex flex-wrap gap-y-3">
           
            {todos.map((todo)=>(
              <div key={todo.id}
              className='w-full'>
                  <TodoItem todo={todo}/>

                </div>
            ))}
        </div>
    </div>
</div>
</Todoprovider>
  )
}

export default App