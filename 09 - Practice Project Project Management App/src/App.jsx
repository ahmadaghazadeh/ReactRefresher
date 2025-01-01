import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() { 
  return (
    <main className="h-screen my-8 flex gap-8  ">
      <ProjectsSidebar/>
      <NoProjectSelected/>
    </main>
  );
}

export default App;
