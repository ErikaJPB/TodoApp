import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  todo: {
    task: string;
    id: string;
    completed: boolean;
  };
  toggleComplete: (todo: {
    task: string;
    id: string;
    completed: boolean;
  }) => void;
  deleteTodo: (id: string) => void;
}

function Todo({ todo, toggleComplete, deleteTodo }: Props) {
  return (
    <li className="flex justify-between bg-slate-200 p-4 my-2 capitalize">
      <div className="flex">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed}
        />
        <p
          className="ml-2 cursor-pointer"
          onClick={() => toggleComplete(todo)}
          style={{
            textDecoration: todo.completed ? "line-through " : "none",
          }}
        >
          {todo.task}
        </p>
      </div>
      <button
        className="flex align-items-center cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
}

export default Todo;
