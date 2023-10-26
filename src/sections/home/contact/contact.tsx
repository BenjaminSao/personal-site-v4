import styles from "./contact.module.scss";
import FeatherIcon from "feather-icons-react";

const {
  contactContainer,
  contactSectionTitle,
  contactContainerTitle,
  contactSubSection,
  info,
  social,
  email,
} = styles;

export default function Contact() {
  return (
    <section className="section mt-48">
      <div className="container mx-auto">
        <div className={`${contactContainer}`}>
          <h2 className={`${contactContainerTitle}`}>CONTACT</h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5">
            <div className="col-span-2">
              <div className={`${contactSubSection} ${info}`}>
                <div className="pb-20 pt-10">
                  <div className="flex pb-2">
                    <FeatherIcon icon="mail"></FeatherIcon>
                    <a className="pt-1 pl-4">ben.saobuppha@mail.utoronto.ca</a>
                  </div>
                  <div className="flex">
                    <FeatherIcon icon="phone"></FeatherIcon>
                    <a className="pt-1 pl-4">(289) 969-6899</a>
                  </div>
                </div>
                <h1 className={`${contactSectionTitle}`}>INFO</h1>
              </div>
              <div className={`${contactSubSection} ${social}`}>
                <div className="pb-20 pt-10">
                  <div className="flex items-center justify-between">
                    <a href="">
                      <FeatherIcon icon="linkedin" size={30}></FeatherIcon>
                    </a>
                    <a href="">
                      <FeatherIcon icon="github" size={30}></FeatherIcon>
                    </a>
                    <a href="">
                      <FeatherIcon icon="instagram" size={30}></FeatherIcon>
                    </a>
                    <a href="">
                      <FeatherIcon icon="facebook" size={30}></FeatherIcon>
                    </a>
                    <a href="">
                      <FeatherIcon icon="search" size={30}></FeatherIcon>
                    </a>
                  </div>
                </div>
                <h1 className={`${contactSectionTitle}`}>SOCIAL</h1>
              </div>
            </div>

            <div className="col-span-2 xl:col-span-3">
              <div className={`${contactSubSection} ${email} h-full`}>
                <div className="inputContainer mb-8">
                  <input className="input" type="text" />
                  <label className="inputLabel">SUBJECT</label>
                </div>

                <div className="inputContainer mb-8">
                  <textarea className="textarea" rows={5} />
                  <label className="inputLabel">BODY</label>
                </div>

                <button className="button">SEND</button>

                <h1 className={`${contactSectionTitle}`}>EMAIL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
