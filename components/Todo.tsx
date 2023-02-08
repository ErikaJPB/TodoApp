import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";

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
  updateTodoText: (
    todo: {
      task: string;
      id: string;
      completed: boolean;
    },

    newText: string
  ) => void;
}

function Todo({ todo, toggleComplete, deleteTodo, updateTodoText }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.task);

  function handleUpdateTodoText(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function handleSaveTodoText() {
    updateTodoText(todo, todoText);
    setIsEditing(false);
  }

  return (
    <li className="flex justify-between bg-slate-200 p-4 my-4 capitalize rounded-2xl">
      <div className="flex text-2xl my-4 ">
        {isEditing ? (
          <input
            className="flex justify-between bg-slate-250 p-1 my-2 rounded-2xl"
            value={todoText}
            onChange={handleUpdateTodoText}
            type="text"
            autoFocus
          />
        ) : (
          <>
            <input
              onChange={() => toggleComplete(todo)}
              type="checkbox"
              checked={todo.completed}
            />
            <p
              className="ml-2 cursor-pointer "
              onClick={() => setIsEditing(true)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todoText}
            </p>
          </>
        )}
      </div>

      <div className="flex flex-col justify-end  ">
        <button
          className="cursor-pointer flex align-items-center my-2"
          onClick={() => setIsEditing(true)}
        >
          <FiEdit />
        </button>
        <button
          className="cursor-pointer flex align-items-center my-2"
          onClick={() => deleteTodo(todo.id)}
        >
          <FaRegTrashAlt />
        </button>
        {isEditing && (
          <button
            className="cursor-pointer flex align-items-center my-2"
            onClick={handleSaveTodoText}
          >
            <TiTickOutline />
          </button>
        )}
      </div>
    </li>
  );
}

export default Todo;
