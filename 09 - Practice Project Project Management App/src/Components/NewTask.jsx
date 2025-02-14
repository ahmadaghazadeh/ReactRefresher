import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAdd() {
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      ></input>
      <Button onClick={handleAdd}>Add Task</Button>
    </div>
  );
}
