import SkillCard from "./components/skillCard";
import styles from "./skills.module.scss";

const { skillsContainer } = styles;

export default function Skills() {
    return (
        <section className="section mt-48" id="skills">
            <div className="container mx-auto">
                <h2 className="pl-4">
                    <span className="font-extrabold">FEATURED</span> SKILLS
                </h2>

                <div
                    className={`${skillsContainer} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6`}
                >
                    <SkillCard
                        skill="React"
                        image="/images/logo-react-icon.png"
                        number={1}
                    ></SkillCard>
                    <SkillCard
                        skill="EXPRESS"
                        image="/images/express.png"
                        number={2}
                    ></SkillCard>
                    <SkillCard
                        skill="Vue"
                        image="/images/image 7.png"
                        number={3}
                    ></SkillCard>
                    <SkillCard
                        skill="Figma"
                        image="/images/image 14.png"
                        number={4}
                    ></SkillCard>
                    <SkillCard
                        skill="TypeScript"
                        image="/images/typescript.png"
                        number={5}
                    ></SkillCard>
                    <SkillCard
                        skill="Python"
                        image="/images/python.png"
                        number={6}
                    ></SkillCard>
                </div>
            </div>
        </section>
    );
}
