import UpdateCard from "./components/updateCard";
import styles from "./updates.module.scss";

const { updatesContainer, sectionTitle } = styles;

export default function Updates() {
  return (
    <section className="section mt-48">
      <div className="container mx-auto">
        <div className={`${updatesContainer} flex flex-col items-center`}>
          <h2 className={`${sectionTitle}`}>UPDATES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
            <UpdateCard
              title="HACKCON"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              date="05/09/2023"
            ></UpdateCard>
            <UpdateCard
              title="JAPAN TRIP!"
              description="Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Tincidunt id aliquet risus feugiat in. Velit
                            dignissim sodales ut eu."
              date="05/09/2023"
            ></UpdateCard>
          </div>

          <button className="button w-fit">SHOW OLDER</button>
        </div>
      </div>
    </section>
  );
}
