import styles from "./experiences.module.scss";

const {
    largeContainer,
    smallContainer,
    content,
    beforeExpTitle,
    afterExpTitle,
    afterExpDescription,
} = styles;

export default function Experiences() {
    return (
        <section className="section mt-48">
            <div className="container mx-auto">
                <h2 className="pl-4">MY EXPERIENCES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div
                        className={`${largeContainer} md:col-span-2 flex flex-col justify-between`}
                    >
                        <div>
                            <p className={`${beforeExpTitle} descriptionText`}>
                                WORK
                            </p>
                            <p className={`${afterExpTitle} descriptionText`}>
                                MY EXPERIENCE
                            </p>
                        </div>

                        <p className={`${afterExpDescription} py-8`}>
                            NetSuite - ERP Cash Management Team • Pioneered a
                            production-level CRUD operation using Java record
                            templates persisted in a SQL database allowing the
                            release of the core feature on the ERP platform
                            affecting 31,000+ businesses • Investigated and
                            debugged enterprise accounts in production managing
                            over 10,000 customer inside of Oracle Netsuite using
                            SQL queries and proposing a timely solution to the
                            problem
                        </p>

                        <div className={`${content}`}>
                            <p className="descriptionText">
                                SOFTWARE DEVELOPER
                            </p>
                            <p className="font-bold text-3xl mt-1">ORACLE</p>
                            <p className="text-sm">2022 (4 Months)</p>
                        </div>
                    </div>
                    <div
                        className={`${smallContainer} col-span-1 flex flex-col justify-between`}
                    >
                        <div>
                            <p className={`${beforeExpTitle} descriptionText`}>
                                WORK
                            </p>
                            <p className={`${afterExpTitle} descriptionText`}>
                                MY EXPERIENCE
                            </p>
                        </div>

                        <p className={`${afterExpDescription} py-8`}>
                            • Spearheaded creation of application architecture
                            flowcharts for the company’s legacy codebase leading
                            to quicker development and implementation of new
                            features sets • Developed analytical insight,
                            funnel, flow, and retention reports using MixPanel
                            and JQL, heavily influencing the client to switch
                            from a B2C engagement to a B2C utilities application
                        </p>

                        <div className={`${content}`}>
                            <p className="descriptionText">
                                SOFTWARE DEVELOPMENT ENGINEER
                            </p>
                            <p className="font-bold text-3xl mt-1">
                                NS LABS INC
                            </p>
                            <p className="text-sm">2021 (4 Months)</p>
                        </div>
                    </div>
                    <div
                        className={`${smallContainer} col-span-1 flex flex-col justify-between`}
                    >
                        <p className="descriptionText">VOLUNTEER</p>

                        <div className={`${content}`}>
                            <p className="descriptionText">
                                SOFTWARE DEVELOPMENT ENGINEER
                            </p>
                            <p className="font-bold text-3xl mt-1">ORACLE</p>
                            <p className="text-sm">2022-Present</p>
                        </div>
                    </div>

                    <div
                        className={`${smallContainer} col-span-1 flex flex-col justify-between`}
                    >
                        <p className="descriptionText">SCHOOL</p>

                        <div className={`${content}`}>
                            <p className="descriptionText">BSc. STATS (ML)</p>
                            <p className="font-bold text-3xl mt-1">
                                UNIVERSITY OF TORONTO
                            </p>
                            <p className="text-sm">2019-Present</p>
                        </div>
                    </div>
                    <div
                        className={`${largeContainer} md:col-span-2 flex flex-col justify-between`}
                    >
                        <p className="descriptionText">WORK</p>

                        <div className={`${content}`}>
                            <p className="descriptionText">
                                TEACHING ASSISTANT
                            </p>
                            <p className="font-bold text-3xl mt-1">
                                UNIVERSITY OF TORONTO
                            </p>
                            <p className="text-sm">2023-Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
