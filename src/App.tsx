import React, { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoListItem } from "./TodoListItem";
import { AddTodo } from "./AddTodo";

interface ITodo {
  id: string;
  label: string;
  checked: boolean;
}

export function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = useCallback((label: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), label, checked: false },
    ]);
  }, []);

  const handleCheckTodo = useCallback((todoId: string) => {
    setTodos((prevTodos) => {
      const index = prevTodos.findIndex((item) => item.id === todoId);

      const newTodos = [...prevTodos];

      newTodos[index].checked = !prevTodos[index].checked;

      return newTodos;
    });
  }, []);

  const deleteTodoItem = useCallback((todoId: string) => {
    setTodos((prevTodos) => {
      const index = prevTodos.findIndex((item) => item.id === todoId);
      console.log(index, "index");
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="todoList">
        <AddTodo onSubmit={handleAddTodo} />
        {todos.length <= 5 ? (
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              label={todo.label}
              checked={todo.checked}
              onCheck={handleCheckTodo}
              onSubmitDeleteTodo={deleteTodoItem}
            />
          ))
        ) : (
          <div>Слишком много задач</div>
        )}
      </div>
    </div>
  );
}
