import { useState } from "react";
import styles from "./navbar.module.scss";

const {
  logoText,
  navbarItemsContainer,
  navbarItem,
  navbarMenu,
  navbarMenuItem,
  closeMenu,
} = styles;

import FeatherIcon from "feather-icons-react";

export default function Navbar() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsFullMenuOpen(!isFullMenuOpen);
  };

  return (
    <section className="section">
      <div className="container mx-auto py-4 w-full">
        <div className="flex">
          <div className="flex items-center pl-4 xl:pl-0">
            <h1>/</h1>
            <h1 className={`pl-2 ${logoText} p-6`}>BenSaobuppha</h1>
          </div>

          <div className={`${navbarItemsContainer} xl:flex ml-12 gap-1 hidden`}>
            <a className={`${navbarItem}`} href="#home">
              <p>Home</p>
            </a>
            <a className={`${navbarItem}`} href="#experience">
              <p>Experience</p>
            </a>
            <a className={`${navbarItem}`} href="#gallery">
              <p>Gallery</p>
            </a>
            <a className={`${navbarItem}`} href="#projects">
              <p>Projects</p>
            </a>
            <a className={`${navbarItem}`} href="#skills">
              <p>Skills</p>
            </a>
            <a className={`${navbarItem}`} href="#updates">
              <p>Updates</p>
            </a>
            <a className={`${navbarItem}`} href="#contact">
              <p>Contact</p>
            </a>
          </div>

          <div className="w-full flex items-center justify-end xl:hidden">
            {!isFullMenuOpen && (
              <div className="screen flex flex-col">
                <div
                  className={`${closeMenu} cursor-pointer`}
                  onClick={() => handleToggleMenu()}
                >
                  <FeatherIcon icon="x" width={40} height={40}></FeatherIcon>
                </div>
                <p className="font-bold text-2xl mb-4">NAVIGATE</p>
                <a
                  className={`${navbarMenuItem}`}
                  href="#home"
                  onClick={() => handleToggleMenu()}
                >
                  <p>Home</p>
                </a>
                <a
                  className={`${navbarMenuItem}`}
                  href="#experience"
                  onClick={() => handleToggleMenu()}
                >
                  <p>Experience</p>
                </a>
                <a
                  className={`${navbarMenuItem}`}
                  href="#gallery"
                  onClick={() => handleToggleMenu()}
                >
                  <p>Gallery</p>
                </a>
                <a
                  className={`${navbarMenuItem}`}
                  href="#projects"
                  onClick={() => handleToggleMenu()}
                >
                  <p>Projects</p>
                </a>
                <a
                  className={`${navbarMenuItem}`}
                  href="#skills"
                  onClick={() => handleToggleMenu()}
                >
                  <p>Skills</p>
                </a>
                <a
                  className={`${navbarMenuItem}`}
                  href="#updates"
                  onClick={() => handleToggleMenu()}
                >
                  <p>Updates</p>
                </a>
                <a
                  className={`${navbarMenuItem}`}
                  href="#contact"
                  onClick={() => handleToggleMenu()}
                >
                  <p>Contact</p>
                </a>
              </div>
            )}

            <div
              className={`${navbarMenu} cursor-pointer`}
              onClick={() => handleToggleMenu()}
            >
              <FeatherIcon icon="menu" className="mb-1"></FeatherIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
