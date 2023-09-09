import Experiences from "@/sections/home/experiences/experiences";
import Gallery from "@/sections/home/gallery/gallery";
import Hero from "@/sections/home/hero/hero";
import Navbar from "@/sections/home/navbar/navbar";
import Skills from "@/sections/skills/skills";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Experiences></Experiences>
      <Skills></Skills>
      <Gallery></Gallery>
    </div>
  );
}
