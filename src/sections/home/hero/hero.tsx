import styles from "./hero.module.scss";

import FeatherIcon from "feather-icons-react";

const {
  heroSectionContainer,
  nameContainer,
  descriptionContainer,
  updateContainer,
  nameContainerSubtitle,
  title,
  leftContainer,
  imageContainer,
  socialsContainer,
} = styles;

export default function Hero() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className={`${heroSectionContainer} p-4`}>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex md:items-end">
              <div className={`${leftContainer} flex flex-col gap-4`}>
                <div className={`${nameContainer}`} data-aos="fade-up">
                  <p className="descriptionText">INTRODUCTION</p>

                  <div className="mt-4">
                    <p className={`${nameContainerSubtitle}`}>Hi I'm</p>
                    <h1 className={`${title}`}>Benjamin Saobuppha.</h1>
                  </div>
                </div>
                <div
                  className={`${descriptionContainer}`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <p className="descriptionText">DESCRIPTION</p>
                  <p className="mt-4">
                    I'm a Full-Stack Developer, who is a 4th year student
                    studying at the University of Toronto specializing in
                    Machine Learning and Data Mining and a Software Developer at
                    Oracle and Vice President at HTV Exec Team.
                  </p>
                </div>
                <div
                  className={`${updateContainer}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
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
              <div data-aos="fade-up" data-aos-delay="150">
                <div
                  className={`${imageContainer} flex items-end justify-between`}
                >
                  <p className="descriptionText">ME</p>
                  <div className={`flex gap-2`}>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
              <div
                className={`${socialsContainer} mt-4`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="descriptionText">CONNECT</p>

                <div className="flex items-center gap-8 mt-4">
                  <a href="">
                    <FeatherIcon icon="linkedin" size={30}></FeatherIcon>
                  </a>
                  <a href="">
                    <FeatherIcon icon="github" size={30}></FeatherIcon>
                  </a>
                  <a href="">
                    <FeatherIcon icon="instagram" size={30}></FeatherIcon>
                  </a>
                  <a href="">
                    <FeatherIcon icon="facebook" size={30}></FeatherIcon>
                  </a>
                  <a href="">
                    <FeatherIcon icon="search" size={30}></FeatherIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
