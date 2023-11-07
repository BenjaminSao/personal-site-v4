import ExperienceCard, { cardSize } from "./components/experienceCard";

import { experiencesData } from "./experiencesData";

export default function Experiences() {
    return (
        <section className="section mt-48" id="experience">
            <div className="container mx-auto">
                <h2 className="pl-4">MY EXPERIENCES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 mx-4 xl:mx-0">
                    {experiencesData &&
                        experiencesData.map((experience, index) => {
                            return (
                                <ExperienceCard
                                    id={index}
                                    key={index}
                                    cardSize={experience.cardSize}
                                    category={experience.category}
                                    description={experience.description}
                                    location={experience.location}
                                    role={experience.role}
                                    duration={experience.duration}
                                ></ExperienceCard>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
