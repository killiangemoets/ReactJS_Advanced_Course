import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.modules.css";

//NexTodo : FC means Function Component
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  // We now have to specify which concrete value or HTML element we plan on storing into this specific ref object we are creating here
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // The exclamation mark tells TypeScript that you know that this possibly nullish value will never be null in this spot
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
