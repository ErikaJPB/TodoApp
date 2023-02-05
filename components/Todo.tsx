import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  todo: string;
}

function Todo({ todo }: Props) {
  return (
    <li className="flex justify-between bg-slate-200 p-4 my-2 capitalize">
      <div className="flex">
        <input type="checkbox" />
        <p className="ml-2 cursor-pointer">{todo}</p>
      </div>
      <button className="flex align-items-center cursor-pointer">
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
}

export default Todo;
