import Experiences from "@/sections/home/experiences/experiences";
import Footer from "@/sections/home/footer/footer";
import Gallery from "@/sections/home/gallery/gallery";
import Hero from "@/sections/home/hero/hero";
import Navbar from "@/sections/home/navbar/navbar";
import Skills from "@/sections/home/skills/skills";
import Contact from "@/sections/home/contact/contact";
import Updates from "@/sections/home/updates/updates";
import Projects from "@/sections/home/projects/projects";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Experiences></Experiences>
      <Skills></Skills>
      <Gallery></Gallery>
      <Projects></Projects>
      <Updates></Updates>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
