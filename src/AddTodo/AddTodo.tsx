import React, { ChangeEvent, FC, memo, useCallback, useState } from "react";
import "./AddTodo.css";

interface Props {
  onSubmit: (text: string) => void;
}

const AddTodoComponent: FC<Props> = (props) => {
  const { onSubmit } = props;

  const [value, setValue] = useState("");

  const handleSubmit = useCallback(() => {
    onSubmit(value);
    setValue("");
  }, [onSubmit, value]);

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    []
  );

  return (
    <div className="AddTodoWrapper">
      <input
        value={value}
        onChange={handleChangeInput}
        className="AddTodoInput"
        placeholder="What should i do next?"
        type="text"
      />
      <button
        className="AddTodoButton"
        disabled={value.length === 0}
        onClick={handleSubmit}
      >
        Add to list
      </button>
    </div>
  );
};

export const AddTodo = memo(AddTodoComponent);
