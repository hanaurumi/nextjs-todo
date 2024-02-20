"use client"

import { Task } from "@/types";
import React, { useState } from 'react';

interface Todoprops {
    todo: Task;
}

const Todo = ({ todo }: Todoprops) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTaskTitle, setEditingTaskTitle] = useState(todo.text);

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsEditing(false);
    };

  return (
    <li 
          key={todo.id}
          className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
          >
            {isEditing ? (
                <input 
                type="text" 
                className="mr-2 py-1 px-2 rounded border-gray-400 border"
                value={editTaskTitle}
                /> 
                ) : (
                 <span>{todo.text}</span> 
                )}
           
            <div>
                {isEditing ? (
                    <button className="text-blue-500 mr-3" onClick={handleSave}>
                       save
                    </button>
                ) : (
                    <button className="text-green-500 mr-3" onClick={handleEdit}>
                       edit  
                    </button>
                )}
              
              <button className="text-red-500">Delete</button>
            </div>
   </li>
  );
};

export default Todo;