import styles from "./updates.module.scss";

const { updatesContainer, updateContainer, updateTitle, sectionTitle } = styles;

export default function Updates() {
  return (
    <section className="section mt-48">
      <div className="container mx-auto">
        <div className={`${updatesContainer} flex flex-col items-center`}>
          <h2 className={`${sectionTitle}`}>UPDATES</h2>

          <div className="grid grid-cols-2 gap-2 pb-4">
            <div
              className={`py-16 px-12 ${updateContainer} flex flex-col justify-between`}
            >
              <div className="pb-16">
                <h3 className={`${updateTitle} pb-2`}>HACKCON</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <p className="descriptionText">05/09/2023</p>
            </div>
            <div
              className={`py-16 px-12 ${updateContainer} flex flex-col justify-between`}
            >
              <div className="pb-16">
                <h3 className={`${updateTitle} pb-2`}>JAPAN TRIP!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Tincidunt id aliquet risus feugiat in. Velit dignissim sodales
                  ut eu.
                </p>
              </div>

              <p className="descriptionText">05/09/2023</p>
            </div>
          </div>

          <button className="button w-fit">SHOW OLDER</button>
        </div>
      </div>
    </section>
  );
}
