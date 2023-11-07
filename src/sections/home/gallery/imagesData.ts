export const imagesData: readonly image[] = [
  {
    imagePath: "/images/galleryGalleryImages/IMG_2440.JPG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam quam.",
    title: "HACKCON x HTV 2023",
  },
  {
    imagePath: "/images/galleryGalleryImages/IMG_3230.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam quam.",
    title: "HACKCON x HTV 2023",
  },
];

interface image {
  imagePath: string;
  description?: string;
  title: string;
}
