import ExperienceCard, { cardSize } from "./components/experienceCard";

export default function Experiences() {
  return (
    <section className="section mt-48">
      <div className="container mx-auto">
        <h2 className="pl-4">MY EXPERIENCES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 mx-4 xl:mx-0">
          <ExperienceCard
            id={1}
            cardSize={cardSize.L}
            category={"WORK"}
            description={`NetSuite - ERP Cash Management Team • Pioneered
                        a production-level CRUD operation using Java
                        record templates persisted in a SQL database
                        allowing the release of the core feature on the
                        ERP platform affecting 31,000+ businesses •
                        Investigated and debugged enterprise accounts in
                        production managing over 10,000 customer inside
                        of Oracle Netsuite using SQL queries and
                        proposing a timely solution to the problem`}
            role="SOFTWARE DEVELOPER"
            location={"ORACLE"}
            duration="2022 (4 Months)"
          ></ExperienceCard>
          <ExperienceCard
            id={2}
            cardSize={cardSize.S}
            category={"WORK"}
            description={`NetSuite - ERP Cash Management Team • Pioneered
                        a production-level CRUD operation using Java
                        record templates persisted in a SQL database
                        allowing the release of the core feature on the
                        ERP platform affecting 31,000+ businesses •
                        Investigated and debugged enterprise accounts in
                        production managing over 10,000 customer inside
                        of Oracle Netsuite using SQL queries and
                        proposing a timely solution to the problem`}
            role="SOFTWARE DEVELOPER"
            location={"ORACLE"}
            duration="2022 (4 Months)"
          ></ExperienceCard>
          <ExperienceCard
            id={3}
            cardSize={cardSize.S}
            category={"WORK"}
            description={`NetSuite - ERP Cash Management Team • Pioneered
                        a production-level CRUD operation using Java
                        record templates persisted in a SQL database
                        allowing the release of the core feature on the
                        ERP platform affecting 31,000+ businesses •
                        Investigated and debugged enterprise accounts in
                        production managing over 10,000 customer inside
                        of Oracle Netsuite using SQL queries and
                        proposing a timely solution to the problem`}
            role="SOFTWARE DEVELOPER"
            location={"ORACLE"}
            duration="2022 (4 Months)"
          ></ExperienceCard>
          <ExperienceCard
            id={4}
            cardSize={cardSize.S}
            category={"WORK"}
            description={`NetSuite - ERP Cash Management Team • Pioneered
                        a production-level CRUD operation using Java
                        record templates persisted in a SQL database
                        allowing the release of the core feature on the
                        ERP platform affecting 31,000+ businesses •
                        Investigated and debugged enterprise accounts in
                        production managing over 10,000 customer inside
                        of Oracle Netsuite using SQL queries and
                        proposing a timely solution to the problem`}
            role="SOFTWARE DEVELOPER"
            location={"ORACLE"}
            duration="2022 (4 Months)"
          ></ExperienceCard>
          <ExperienceCard
            id={5}
            cardSize={cardSize.L}
            category={"WORK"}
            description={`NetSuite - ERP Cash Management Team • Pioneered
                        a production-level CRUD operation using Java
                        record templates persisted in a SQL database
                        allowing the release of the core feature on the
                        ERP platform affecting 31,000+ businesses •
                        Investigated and debugged enterprise accounts in
                        production managing over 10,000 customer inside
                        of Oracle Netsuite using SQL queries and
                        proposing a timely solution to the problem`}
            role="SOFTWARE DEVELOPER"
            location={"ORACLE"}
            duration="2022 (4 Months)"
          ></ExperienceCard>
        </div>
      </div>
    </section>
  );
}
