import styles from "./gallery.module.scss";

const { imageGalleryContainer, galleryTitle } = styles;

export default function Gallery() {
    return (
        <section className="section mt-32">
            <div className="container mx-auto">
                <div className={`${imageGalleryContainer}`}>
                    <h2>GALLERY</h2>

                    <div className="grid grid-cols-3 h-full">
                        <div className="col-span-2 flex flex-col justify-between">
                            <div className={`flex gap-2`}>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>

                            <div className="grid grid-cols-3">
                                <p className="col-span-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Elementum sagittis vitae et leo duis ut diam
                                    quam.
                                </p>
                                <h1 className={`${galleryTitle} col-span-3 mt-4`}>
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
