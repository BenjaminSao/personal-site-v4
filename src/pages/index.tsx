import Experiences from "@/sections/experiences/experiences";
import Hero from "@/sections/home/hero/hero";
import Navbar from "@/sections/home/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Experiences></Experiences>
    </div>
  );
}
