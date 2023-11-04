import { useEffect, useRef, useState } from "react";
import styles from "./heroImageGallery.module.scss";
import { images } from "./images";

const { imageContainer, fadeOut, fadeIn } = styles;

export default function HeroImageGallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [inTransition, setInTransition] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

    const gotoNextImage = (prev) => {
        if (prev + 1 !== images.length) {
            changeImage(prev + 1);
        } else {
            changeImage(0);
        }
    };

    useEffect(() => {
        intervalRef.current = setInterval(
            () => gotoNextImage(currentImageIndex),
            7500
        );

        return () => {
            clearInterval(intervalRef.current as NodeJS.Timeout);
        };
    }, [currentImageIndex]);

    return (
        <div data-aos="fade-up" data-aos-delay="150">
            <div
                style={{
                    backgroundImage: `url(${images[currentImageIndex].imagePath})`,
                }}
                className={`${imageContainer} flex items-end justify-between ${
                    inTransition ? fadeOut : fadeIn
                }`}
            >
                <p className="descriptionText">
                    {images[currentImageIndex].shortDescription?.toUpperCase()}
                </p>
                <div className={`flex gap-2`}>
                    {images &&
                        images.map((image, index) => (
                            <button
                                key={index}
                                className={`circle ${
                                    index === currentImageIndex
                                        ? "isSelected"
                                        : ""
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
