import styles from "./hero.module.scss";

const {
  heroSectionContainer,
  nameContainer,
  descriptionContainer,
  updateContainer,
  nameContainerSubtitle,
  title,
  leftContainer,
  imageContainer,
  circle,
  socialsContainer,
} = styles;

export default function Hero() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className={`${heroSectionContainer} p-4`}>
          <div className="flex gap-4">
            <div className="flex items-end">
              <div className={`${leftContainer} flex flex-col gap-4`}>
                <div className={`${nameContainer}`}>
                  <p className="descriptionText">INTRODUCTION</p>

                  <div className="mt-4">
                    <p className={`${nameContainerSubtitle}`}>Hi I'm</p>
                    <h1 className={`${title}`}>Benjamin Saobuppha.</h1>
                  </div>
                </div>
                <div className={`${descriptionContainer}`}>
                  <p className="descriptionText">DESCRIPTION</p>
                  <p className="mt-4">
                    I'm a Full-Stack Developer, who is a 4th year student
                    studying at the University of Toronto specializing in
                    Machine Learning and Data Mining and a Software Developer at
                    Oracle and Vice President at HTV Exec Team.
                  </p>
                </div>
                <div className={`${updateContainer}`}>
                  <p className="descriptionText">RECENT UPDATE</p>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div
                className={`${imageContainer} flex items-end justify-between`}
              >
                <p className="descriptionText">ME</p>
                <div className={`flex gap-2`}>
                  <div className={`${circle}`}></div>
                  <div className={`${circle}`}></div>
                  <div className={`${circle}`}></div>
                </div>
              </div>
              <div className={`${socialsContainer} mt-32`}>
                <p className="descriptionText">CONNECT</p>
                <div className="m-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
