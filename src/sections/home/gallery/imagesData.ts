export const imagesData: readonly image[] = [
  {
    imagePath: "/images/galleryGalleryImages/htv8.jpg",
    description:
      "The return of Hike the Valley, at night! Was very spooky and fun :)",
    title: "HTV 8",
  },
  {
    imagePath: "/images/galleryGalleryImages/IMG_2440.JPG",
    description: "HTV 7 - Hike the Valley ",
    title: "HTV 7",
  },
];

interface image {
  imagePath: string;
  description?: string;
  title: string;
}
