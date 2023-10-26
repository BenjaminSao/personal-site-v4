import styles from "./projects.module.scss";

const {
  projects,
  project,
  projectImageOverlay,
  projectImage,
  projectsSection,
} = styles;

export default function Projects() {
  return (
    <section className={`${projectsSection} mt-48 flex flex-col items-center`}>
      <div className="container mx-auto">
        <h2 className="pl-4">PROJECT</h2>
      </div>

      <div className={`${projects} mt-6 flex`}>
        <div className={`${project}`}>
          <img
            className={`${projectImage}`}
            src="/images/Thumnail.png"
            alt=""
          />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>

        <div className={`${project}`}>
          <img className={`${projectImage}`} src="" alt="" />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>

        <div className={`${project}`}>
          <img className={`${projectImage}`} src="" alt="" />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>

        <div className={`${project}`}>
          <img className={`${projectImage}`} src="" alt="" />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>

        <div className={`${project}`}>
          <img className={`${projectImage}`} src="" alt="" />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>

        <div className={`${project}`}>
          <img className={`${projectImage}`} src="" alt="" />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>

        <div className={`${project}`}>
          <img className={`${projectImage}`} src="" alt="" />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>

        <div className={`${project}`}>
          <img
            className={`${projectImage}`}
            src="/images/Thumnail.png"
            alt=""
          />
          <div className={`${projectImageOverlay}`}></div>

          <div className="h-[15%] px-8 pt-10">
            <p className="descriptionText mb-2">TALESPIN</p>
            <p>AI Generated Children Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
}
