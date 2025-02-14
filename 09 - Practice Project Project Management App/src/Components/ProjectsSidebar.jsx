import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddNewProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let className =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            className += " bg-stone-800 text-stone-200";
          } else {
            className += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <Button
                onClick={() => onSelectProject(project.id)}
                className={className}
              >
                {project.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
