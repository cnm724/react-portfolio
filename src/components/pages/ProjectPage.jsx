import { useState } from "react";
import projectInfo from "../../projectInfo";
import * as projectImgs from "../../assets/projectImgs";
import "./pages.css";

function ProjectCard(projectInfo) {
  return (
    <div className="space col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img className="card-img-top" style={{ height: "150px", width: "100%", objectFit: "cover" }} src={projectImgs[projectInfo.image]} alt={`${projectInfo.projectName} project image`} />
        <div className="card-body">
          <h5 className="card-title">{projectInfo.projectName}</h5>
          {/* <p className="card-text">{projectInfo.description}</p> */}
        </div>
        <div className="card-body">
          <a href={projectInfo.github} className="btn btn-primary card-link">Github</a>
          <a href={projectInfo.liveLink} className="btn btn-primary card-link">Live Link</a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [projects] = useState(projectInfo);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          image={project.image}
          description={project.description}
          github={project.github}
          liveLink={project.liveLink}
        />
      ))}
    </div>
  );
}
