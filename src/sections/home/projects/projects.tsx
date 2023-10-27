import ProjectCard from "./components/projectCard";
import styles from "./projects.module.scss";

const { projects, projectsSection } = styles;

export default function Projects() {
  return (
    <section className={`${projectsSection} mt-48 flex flex-col items-center`}>
      <div className="container mx-auto">
        <h2 className="pl-4">PROJECT</h2>
      </div>

      <div className={`${projects} mt-6 flex`}>
        <ProjectCard
          image="/images/Thumnail.png"
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>

        <ProjectCard
          image="/images/Thumnail.png"
          name="TALESPIN"
          tagline="AI Generated Children Stories"
        ></ProjectCard>
      </div>
    </section>
  );
}
