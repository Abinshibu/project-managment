import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectedProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    const projectId = Math.random();
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, { ...projectData, id: projectId }],
        selectedProjectId: undefined,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  }
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelectProject={handleSelectedProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-16">
      <ProjectSidebar onSelectProject={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
