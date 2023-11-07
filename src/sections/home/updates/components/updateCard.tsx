import styles from "./updateCard.module.scss";

const { updateContainer, updateTitle } = styles;

export interface UpdateCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function UpdateCard(props: UpdateCardProps) {
  return (
    <div
      className={`py-16 px-12 ${updateContainer} flex flex-col justify-between -z-10`}
      data-aos="fade-in"
      data-aos-delay={props.id * 100}
    >
      <div className="pb-16">
        <h3 className={`${updateTitle} pb-2`}>{props.title.toUpperCase()}</h3>
        <p>{props.description}</p>
      </div>

      <p className="descriptionText">{props.date}</p>
    </div>
  );
}
