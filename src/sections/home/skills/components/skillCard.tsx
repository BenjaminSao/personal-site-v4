import styles from "./skillCard.module.scss";

import Image from "next/image";

const { skillContainer, skillNumber } = styles;

interface SkillCardProps {
  number: number;
  skill: string;
  image: string;
}

export default function SkillCard(props: SkillCardProps) {
  return (
    <div className={`${skillContainer} flex justify-between`}>
      <div className="flex flex-col justify-between">
        <Image
          src={`${props.image}`}
          width={40}
          height={40}
          alt={`${props.skill}`}
        ></Image>
        <p className="descriptionText">{props.skill.toUpperCase()}</p>
      </div>
      <div className="flex items-end justify-center">
        <div className={`${skillNumber}`}>
          <h1>{props.number.toString()}</h1>
        </div>
      </div>
    </div>
  );
}
