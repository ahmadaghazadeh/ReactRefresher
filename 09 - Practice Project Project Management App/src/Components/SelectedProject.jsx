import Button from "./Button";
import P from "./P";
import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onDeleteTask,
  onAddTask,
  tasks,
}) {
  const formatedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(project);
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <P>{formatedDate}</P>
        <P>{project.description}</P>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
