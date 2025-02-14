import Button from "./Button";
import NewTask from "./NewTask";
import P from "./P";

export default function Tasks({ onAdd, tasks, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length < 1 && <P>There is now tasks please add new one</P>}
      <ol>
        {tasks.length >= 1 &&
          tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex items-center gap-2 justify-between p-4"
              >
                <p>{task.text}</p>
                <Button onClick={() => onDelete(task.id)}>Clear</Button>
              </li>
            );
          })}
      </ol>
    </section>
  );
}
