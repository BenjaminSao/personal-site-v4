import styles from "./projectCard.module.scss";

import Image from "next/image";

const { project, projectImage, projectImageOverlay } = styles;

export interface ProjectCardProps {
    id: number;
    image?: string;
    name: string;
    tagline: string;
    backgroundColor?: string;
    onClick: () => void;
    key: number;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className={`${project} cursor-pointer`}
            data-aos="fade-up"
            data-aos-delay={50 * props.id}
            onClick={() => props.onClick()}
            key={props.key}
        >
            {props.image ? (
                <Image
                    width={4320}
                    height={4320}
                    className={`${projectImage}`}
                    src={props.image}
                    alt=""
                />
            ) : (
                <div
                    className={`${projectImage}`}
                    style={{ background: props.backgroundColor }}
                ></div>
            )}

            <div className={`${projectImageOverlay}`}></div>

            <div className="h-[15%] px-8 pt-10">
                <p className="descriptionText mb-2">
                    {props.name.toUpperCase()}
                </p>
                <p>{props.tagline}</p>
            </div>
        </div>
    );
}
