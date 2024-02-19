import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]>  => {
    const res = await fetch(`http://localhost:3001/tasks`,{
        cache: "no-store", //SSR 
    });
    const todos = res.json();

    return todos;
};

export const addTodo = async (todo: Task): Promise<Task>  => {
    const res = await fetch(`http://localhost:3001/tasks`,{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const newtodo = res.json();

    return newtodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task>  => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({text: newText}),
    });
    const updatedTodo = res.json();

    return updatedTodo;
};