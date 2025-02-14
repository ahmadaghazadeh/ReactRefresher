import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    projectSelectedId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevValue) => {
      return { ...prevValue, projectSelectedId: null };
    });
  }

  function handleAddNewProject(project) {
    const projectId = Math.random();
    setProjectsState((prevValue) => {
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prevValue,
        projects: [...prevValue.projects, newProject],
        projectSelectedId: undefined,
      };
    });
  }
  function handelCloseNewProject() {
    setProjectsState((prevValue) => {
      return { ...prevValue, projectSelectedId: undefined };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevValue) => {
      return { ...prevValue, projectSelectedId: id };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevValue) => {
      return {
        ...prevValue,
        projectSelectedId: undefined,
        projects: prevValue.projects.filter(
          (project) => project.id !== prevValue.projectSelectedId
        ),
      };
    });
  }

  function handleAddTask(text) {
    const taskId = Math.random();
    setProjectsState((prevValue) => {
      const newTask = {
        text: text,
        projectId: prevValue.projectSelectedId,
        id: taskId,
      };
      return {
        ...prevValue,
        tasks: [newTask, ...prevValue.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevValue) => {
      return {
        ...prevValue,
        tasks: prevValue.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.projectSelectedId
  );

  let content = (
    <SelectedProject
      onDelete={handleDeleteProject}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );
  if (projectsState.projectSelectedId === undefined) {
    content = (
      <NoProjectSelected onStartAddNewProject={handleStartAddProject} />
    );
  } else if (projectsState.projectSelectedId === null) {
    content = (
      <NewProject
        onClose={handelCloseNewProject}
        onAddNewProject={handleAddNewProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8  ">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        onStartAddNewProject={handleStartAddProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
