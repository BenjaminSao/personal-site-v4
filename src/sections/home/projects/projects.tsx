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
          id={1}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={2}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={3}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={4}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={5}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={6}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={7}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={8}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={9}
        ></ProjectCard>

        <ProjectCard
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={10}
        ></ProjectCard>

        <ProjectCard
          image="/images/Thumnail.png"
          name="TALESPIN"
          tagline="AI Generated Children Stories"
          id={11}
        ></ProjectCard>
      </div>
    </section>
  );
}
