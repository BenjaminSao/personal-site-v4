import { useState } from "react";
import styles from "./heroImageGallery.module.scss";
import { imagesData } from "./imagesData";

const { imageContainer, fadeOut, fadeIn } = styles;

export default function HeroImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  const handleChangeImage = (index) => {
    changeImage(index);
  };

  const changeImage = (index) => {
    setInTransition(true);

    setTimeout(() => {
      setCurrentImageIndex(index);
    }, 750);

    setTimeout(() => {
      setInTransition(false);
    }, 850);
  };

  return (
    <div data-aos="fade-up" data-aos-delay="150">
      <div
        style={{
          backgroundImage: `url(${imagesData[currentImageIndex].imagePath})`,
        }}
        className={`${imageContainer} flex items-end justify-between ${
          inTransition ? fadeOut : fadeIn
        }`}
      >
        <p className="descriptionText">
          {imagesData[currentImageIndex].shortDescription?.toUpperCase()}
        </p>
        <div className={`flex gap-2`}>
          {imagesData &&
            imagesData.map((image, index) => (
              <button
                key={index}
                className={`circle ${
                  index === currentImageIndex ? "isSelected" : ""
                }`}
                onClick={() => handleChangeImage(index)}
                disabled={inTransition}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
}
