import styles from "./experiences.module.scss";

const { largeContainer, smallContainer, content } = styles;

export default function Experiences() {
  return (
    <section className="section mt-48">
      <div className="container mx-auto">
        <h2>MY EXPERIENCES</h2>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <div
            className={`${largeContainer} col-span-2 flex flex-col justify-between`}
          >
            <p className="descriptionText">WORK</p>

            <div className={`${content}`}>
              <p className="descriptionText">SOFTWARE DEVELOPER</p>
              <p className="font-bold text-3xl mt-1">ORACLE</p>
              <p className="text-sm">2022 (4 Months)</p>
            </div>
          </div>
          <div
            className={`${smallContainer} col-span-1 flex flex-col justify-between`}
          >
            <p className="descriptionText">WORK</p>

            <div className={`${content}`}>
              <p className="descriptionText">SOFTWARE DEVELOPMENT ENGINEER</p>
              <p className="font-bold text-3xl mt-1">NS LABS INC</p>
              <p className="text-sm">2021 (4 Months)</p>
            </div>
          </div>
          <div
            className={`${smallContainer} col-span-1 flex flex-col justify-between`}
          >
            <p className="descriptionText">VOLUNTEER</p>

            <div className={`${content}`}>
              <p className="descriptionText">SOFTWARE DEVELOPMENT ENGINEER</p>
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
              <p className="font-bold text-3xl mt-1">UNIVERSITY OF TORONTO</p>
              <p className="text-sm">2019-Present</p>
            </div>
          </div>
          <div
            className={`${largeContainer} col-span-2 flex flex-col justify-between`}
          >
            <p className="descriptionText">WORK</p>

            <div className={`${content}`}>
              <p className="descriptionText">TEACHING ASSISTANT</p>
              <p className="font-bold text-3xl mt-1">UNIVERSITY OF TORONTO</p>
              <p className="text-sm">2023-Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
