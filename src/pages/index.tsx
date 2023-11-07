import Experiences from "@/sections/home/experiences/experiences";
import Footer from "@/sections/home/footer/footer";
import Gallery from "@/sections/home/gallery/gallery";
import Hero from "@/sections/home/hero/hero";
import Navbar from "@/sections/home/navbar/navbar";
import Skills from "@/sections/home/skills/skills";
import Contact from "@/sections/home/contact/contact";
import Updates from "@/sections/home/updates/updates";
import Projects from "@/sections/home/projects/projects";

import AOS from "aos";
import { useEffect } from "react";

import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Benjamin Saobuppha - Home</title>
      </Head>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Experiences></Experiences>
        <Gallery></Gallery>
        <Projects></Projects>
        <Skills></Skills>
        <Updates></Updates>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}
