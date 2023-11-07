import ProjectCard from "./components/projectCard";
import styles from "./projects.module.scss";
import FeatherIcon from "feather-icons-react";

import { projectsData, Project } from "./projectsData";
import { useState } from "react";

const {
  projects,
  projectsSection,
  toolContainer,
  projectDescription,
  projectDescriptionContainer,
  shown,
} = styles;

export default function Projects() {
  const [project, setProject] = useState(null) as [Project | null, any];

  const [isShown, setIsShown] = useState(false);

  const handleProjectSelection = (updateProject) => {
    if (project == null) {
      setProject(updateProject);
      setTimeout(() => {
        setIsShown(true);
      }, 20);
      return;
    }

    setIsShown(false);

    setTimeout(() => {
      setProject(updateProject);
      setIsShown(true);
    }, 500);
  };

  return (
    <section
      className={`${projectsSection} mt-48 flex flex-col items-center`}
      id="projects"
    >
      <div className="container mx-auto">
        <h2 className="pl-4">PROJECT</h2>
      </div>

      <div className={`${projects} mt-6 flex`}>
        {projectsData &&
          projectsData.map((project, index) => {
            return (
              <ProjectCard
                image={project.imagePath}
                backgroundColor={project.backgroundColor}
                name={project.projectName}
                tagline={project.shortDescription}
                id={index}
                onClick={() => handleProjectSelection(project)}
                key={index}
              ></ProjectCard>
            );
          })}
      </div>

      {project && (
        <div
          className={`container mx-auto mt-16 px-4 md:px-0 ${projectDescriptionContainer} ${
            isShown ? shown : ""
          }`}
        >
          <div className={`${projectDescription}`}>
            <p className="descriptionText mb-8">PROJECT DESCRIPTION</p>
            <h2>{project.projectName}</h2>
            <p>"{project.shortDescription}"</p>

            {project.achievement && (
              <>
                <p className="font-bold mt-6">Achievement</p>
                <p className="mt-2">{project.achievement}</p>
              </>
            )}

            <p className="font-bold mt-6">Description</p>
            <p className="mt-2">{project.description}</p>

            <p className="font-bold mt-4">Project Type</p>
            <p className="mt-2">{project.projectType}</p>

            <p className="font-bold mt-4">Tools</p>
            <div className="flex gap-2 mt-2">
              {project.tools.map((tool, index) => {
                return (
                  <div className={`${toolContainer} font-bold`}>
                    {tool}
                  </div>
                );
              })}
            </div>

            {(project.link || project.githubLink) && (
              <>
                <p className="font-bold mt-4">Links</p>
                <div className="flex gap-4 mt-2">
                  {project.link && (
                    <a href={project.link}>
                      <FeatherIcon icon="link" size={25}></FeatherIcon>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink}>
                      <FeatherIcon icon="github" size={25}></FeatherIcon>
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
