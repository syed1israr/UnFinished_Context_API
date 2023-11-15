import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
    const [todos, settodos]=useState([]);
    const {addtodo}= useTodo();
    const add = (e) =>{
      e.preventDefault();
      if(!todos) return 
      addtodo({todo:todos,completed:false})
      settodos("")
    }

  return (
      <form onSubmit={addtodo}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todos}
            onChange={(e)=>settodos(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;