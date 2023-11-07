import { useState } from "react";
import UpdateCard from "./components/updateCard";
import styles from "./updates.module.scss";
import { updates } from "./updatesData";

const { updatesContainer, sectionTitle } = styles;

export default function Updates() {
  const [isShowAll, setIsShowAll] = useState(false);

  function handleShow() {
    setIsShowAll(!isShowAll);
  }

  return (
    <section className="section mt-48" id="updates">
      <div className="container mx-auto">
        <div className={`${updatesContainer} flex flex-col items-center`}>
          <h2 className={`${sectionTitle}`}>UPDATES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
            {isShowAll &&
              updates.map((update, index) => {
                return (
                  <UpdateCard
                    id={index}
                    title={update.title.toUpperCase()}
                    description={update.description}
                    date={update.date}
                  ></UpdateCard>
                );
              })}
            {!isShowAll && (
              <>
                <UpdateCard
                  id={0}
                  title={updates[0].title.toUpperCase()}
                  description={updates[0].description}
                  date={updates[0].date}
                ></UpdateCard>
                <UpdateCard
                  id={1}
                  title={updates[1].title.toUpperCase()}
                  description={updates[1].description}
                  date={updates[1].date}
                ></UpdateCard>
              </>
            )}
          </div>

          <button className="button w-fit" onClick={() => handleShow()}>
            {!isShowAll ? "SHOW OLDER" : "SHOW LESS"}
          </button>
        </div>
      </div>
    </section>
  );
}
