export const imagesData: readonly image[] = [
  {
    imagePath: "/images/heroGalleryImages/IMG_2440.JPG",
    shortDescription: "HTV 7",
  },
  {
    imagePath: "/images/heroGalleryImages/IMG_3230.png",
    shortDescription: "ME (NYC)",
  },
];

interface image {
  imagePath: string;
  shortDescription?: string;
}
