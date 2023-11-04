import styles from "./gallery.module.scss";

import Image from "next/image";

const { imageGalleryContainer, galleryTitle, galleryImage, overlay, fadeOut, fadeIn } = styles;

import { images } from "./images";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
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
        <section className="section mt-48">
            <div className="container mx-auto">
                <div className={`${imageGalleryContainer}`} data-aos="fade-up">
                    <h2>GALLERY</h2>

                    <Image
                        className={`${galleryImage} ${
                            inTransition ? fadeOut : fadeIn
                        }`}
                        src={`${images[currentImageIndex].imagePath}`}
                        alt=""
                        fill
                    />
                    <div className={`${overlay}`}></div>

                    <div className="grid grid-cols-3 h-full">
                        <div className="col-span-2 flex flex-col justify-between">
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
                                            onClick={() =>
                                                handleChangeImage(index)
                                            }
                                            disabled={inTransition}
                                        ></button>
                                    ))}
                            </div>

                            <div className="grid grid-cols-3">
                                <p className="col-span-3 lg:col-span-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Elementum sagittis vitae et leo duis ut diam
                                    quam.
                                </p>
                                <h1
                                    className={`${galleryTitle} col-span-3 mt-4`}
                                >
                                    HACKCON x HTV 2023
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
