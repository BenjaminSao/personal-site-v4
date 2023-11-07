import styles from "./gallery.module.scss";

import Image from "next/image";

const {
  imageGalleryContainer,
  galleryTitle,
  galleryImage,
  overlay,
  fadeOut,
  fadeIn,
} = styles;

import { imagesData } from "./imagesData";
import { useState } from "react";

export default function Gallery() {
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
    <section className="section mt-48" id="gallery">
      <div className="container mx-auto">
        <div className={`${imageGalleryContainer}`} data-aos="fade-up">
          <h2>GALLERY</h2>

          <Image
            className={`${galleryImage} ${inTransition ? fadeOut : fadeIn}`}
            src={`${imagesData[currentImageIndex].imagePath}`}
            alt=""
            fill
          />
          <div className={`${overlay}`}></div>

          <div className="grid grid-cols-3 h-full">
            <div className="col-span-2 flex flex-col justify-between">
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

              <div className="grid grid-cols-3">
                <p className="col-span-3 lg:col-span-2">
                  {imagesData[currentImageIndex].description}
                </p>
                <h1 className={`${galleryTitle} col-span-3 mt-4`}>
                  {imagesData[currentImageIndex].title.toUpperCase()}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
