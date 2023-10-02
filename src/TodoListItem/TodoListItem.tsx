import { FC, memo, useCallback } from "react";
import "./TodoListItem.css";

interface Props {
  id: string;
  checked: boolean;
  label: string;
  onCheck: (todoId: string) => void;
  onSubmitDeleteTodo: (todoId: string) => void;
}

export const TodoListItemComponent: FC<Props> = (props) => {
  const { onCheck, id, onSubmitDeleteTodo } = props;

  const handleCheck = useCallback(() => {
    onCheck(id);
  }, [id, onCheck]);

  const handleDelete = useCallback(() => {
    onSubmitDeleteTodo(id);
  }, [id, onSubmitDeleteTodo]);

  return (
    <div className="todoListItem">
      <div className="content">
        <div
          className={`todoCheck ${props.checked ? "checked" : ""}`}
          onClick={handleCheck}
        ></div>
        <div className={`todoLabel ${props.checked ? "checked" : ""}`}>
          {props.label}
        </div>
      </div>
      <div className="removeButton" onClick={handleDelete}>
        Remove
      </div>
    </div>
  );
};

export const TodoListItem = memo(TodoListItemComponent);
