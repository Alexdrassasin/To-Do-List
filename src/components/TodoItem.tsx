import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps{
    todo: Todo;
    onCompletedChange: (id:number, completed:boolean)=>void;
    onDelete: (id:number)=>void;
}

export default function TodoItem({todo, onCompletedChange,onDelete}: TodoItemProps) {
    return (
        <div className="flex items-center gap-1">
            <label className ="flex grow items-center gap-2 p-2 border rounded-md shadow-sm hover:bg-slate-300 bg-white">
                <input 
                type = "checkbox" 
                className="scale-125"
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                >
                </input>
                <span className={todo.completed ? "line-through text-gray-500" : ""}>
                    {todo.title}
                </span>
                
                
            </label>  
            <button onClick={()=> onDelete(todo.id)} className="p-1">
                <Trash2 size={20} className="text-gray-500 hover:text-red-500"/>
            </button>
        </div>
    )
}