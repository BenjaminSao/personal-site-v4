import styles from "./navbar.module.scss";

const { logoText, navbarItemsContainer, navbarItem, isSelected } = styles;

export default function Navbar() {
  return (
    <section className="section">
      <div className="container mx-auto pl-8 py-4 w-full">
        <div className="flex">
          <div className="flex items-center">
            <h1>/</h1>
            <h1 className={`pl-2 ${logoText}`}>BenSaobuppha</h1>
          </div>

          <div className={`${navbarItemsContainer} flex ml-12 gap-4`}>
            <div className={`${navbarItem}`}>
              <p>Home</p>
            </div>
            <div className={`${navbarItem}`}>
              <p>Experience</p>
            </div>
            <div className={`${navbarItem}`}>
              <p>Skills</p>
            </div>
            <div className={`${navbarItem}`}>
              <p>Gallery</p>
            </div>
            <div className={`${navbarItem}`}>
              <p>Projects</p>
            </div>
            <div className={`${navbarItem}`}>
              <p>Updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
