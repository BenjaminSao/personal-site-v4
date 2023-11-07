import HeroImageGallery from "./components/heroImageGallery/heroImageGallery";
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
  socialsContainer,
} = styles;

import { updates } from "../updates/updatesData";

export default function Hero() {
  return (
    <section className="section" id="home">
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
                  <p className="mt-4">{updates[0].description}</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <HeroImageGallery></HeroImageGallery>
              <div
                className={`${socialsContainer} mt-4`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="descriptionText">CONNECT</p>

                <div className="flex items-center gap-8 mt-4">
                  <a href="https://www.linkedin.com/in/bensaobuppha/">
                    <FeatherIcon icon="linkedin" size={30}></FeatherIcon>
                  </a>
                  <a href="https://github.com/BenjaminSao">
                    <FeatherIcon icon="github" size={30}></FeatherIcon>
                  </a>
                  <a href="https://www.instagram.com/">
                    <FeatherIcon icon="instagram" size={30}></FeatherIcon>
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
