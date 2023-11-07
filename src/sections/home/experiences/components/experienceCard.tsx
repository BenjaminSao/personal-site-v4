import styles from "./experienceCard.module.scss";

const {
  largeContainer,
  smallContainer,
  beforeExpTitle,
  afterExpTitle,
  afterExpDescription,
} = styles;

export interface ExperienceCardProps {
  id: number;
  cardSize: cardSize;
  category: string;
  description?: string;
  role: string;
  location: string;
  duration: string;
}

export enum cardSize {
  L = "Large",
  S = "Small",
}

export default function experienceCard(props: ExperienceCardProps) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={props.id * 25}
      className={`${props.cardSize === cardSize.L && " md:col-span-2"}`}
    >
      <div
        className={`${
          props.cardSize === cardSize.L ? largeContainer : smallContainer
        } flex flex-col justify-between h-full`}
      >
        <div>
          <p className={`${beforeExpTitle} descriptionText`}>
            {props.category.toUpperCase()}
          </p>
          <p className={`${afterExpTitle} descriptionText`}>MY EXPERIENCE</p>

          <p className={`${afterExpDescription} py-4`}>
            {props.description ? props.description : ""}
          </p>
        </div>

        <div>
          <p className="descriptionText">{props.role.toUpperCase()}</p>
          <p className="font-bold text-3xl mt-1">
            {props.location.toUpperCase()}
          </p>
          <p className="text-sm">{props.duration}</p>
        </div>
      </div>
    </div>
  );
}
