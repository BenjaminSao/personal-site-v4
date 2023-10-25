import styles from "./skills.module.scss";
import Image from "next/image";

const { skillsContainer, skillContainer, skillNumber } = styles;

export default function Skills() {
  return (
    <section className="section mt-48">
      <div className="container mx-auto">
        <h2>
          <span className="font-extrabold">FEATURED</span> SKILLS
        </h2>

        <div className={`${skillsContainer} grid grid-cols-3 mt-6`}>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/logo-react-icon.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">REACT</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/image 7.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">VUE</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/image 14.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">FIGMA</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>3</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/image 9.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">EXPRESS</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>4</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/image 14.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">FIGMA</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>5</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/logo-react-icon.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">REACT</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>6</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/logo-react-icon.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">REACT</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/image 7.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">VUE</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div className={`${skillContainer} flex justify-between`}>
            <div className="flex flex-col justify-between">
              <Image
                src={"/images/image 14.png"}
                width={40}
                height={40}
                alt="React"
              ></Image>
              <p className="descriptionText">FIGMA</p>
            </div>
            <div className="flex items-end justify-center">
              <div className={`${skillNumber}`}>
                <h1>3</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
