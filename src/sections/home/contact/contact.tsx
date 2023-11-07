import { useRef, useState } from "react";
import styles from "./contact.module.scss";
import FeatherIcon from "feather-icons-react";

import emailjs from "emailjs-com";

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
  const userName = useRef<HTMLInputElement>(null);
  const userEmail = useRef<HTMLInputElement>(null);
  const userSubject = useRef<HTMLInputElement>(null);
  const userBody = useRef<HTMLTextAreaElement>(null);

  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStateMessage, setEmailStateMessage] = useState("");

  // TODO: Add reset email fields

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = {
      to_name: "Benjamin Saobuppha",
      from_email: userEmail.current ? userEmail.current.value : "",
      from_name: userName.current ? userName.current.value : "",
      subject: userSubject.current ? userSubject.current.value : "",
      message: userBody.current ? userBody.current.value : "",
    };

    setEmailStateMessage("Sending Email");
    setIsSendingEmail(true);

    try {
      await emailjs.send(
        "service_17qay2q",
        "template_ew5eyrj",
        email,
        "DR-noMvO_82_XRMg1"
      );

      setEmailStateMessage("Email Sent!");
    } catch (e) {
      setEmailStateMessage("Sending Failed");
    } finally {
      setTimeout(() => {
        setEmailStateMessage("");
        setIsSendingEmail(false);
      }, 2000);
    }
  };

  return (
    <section className="section mt-48" id="contact">
      {isSendingEmail && (
        <div className="screen">
          <div className="flex flex-col items-center">
            <div className="loader mb-4"></div>
            <p>{emailStateMessage}</p>
          </div>
        </div>
      )}
      <div className="container mx-auto">
        <div className={`${contactContainer}`} data-aos="zoom-in">
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
                    <a className="pt-1 pl-4">+1 (289) 969-6899</a>
                  </div>
                </div>
                <h1 className={`${contactSectionTitle}`}>INFO</h1>
              </div>
              <div className={`${contactSubSection} ${social}`}>
                <div className="pb-20 pt-10">
                  <div className="flex items-center justify-between">
                    <a href="https://www.linkedin.com/in/bensaobuppha/">
                      <FeatherIcon icon="linkedin" size={30}></FeatherIcon>
                    </a>
                    <a href="https://github.com/BenjaminSao">
                      <FeatherIcon icon="github" size={30}></FeatherIcon>
                    </a>
                    <a href="https://www.instagram.com/saobupphaben/">
                      <FeatherIcon icon="instagram" size={30}></FeatherIcon>
                    </a>
                    <a href="https://www.facebook.com/saobupphaben/">
                      <FeatherIcon icon="facebook" size={30}></FeatherIcon>
                    </a>
                  </div>
                </div>
                <h1 className={`${contactSectionTitle}`}>SOCIAL</h1>
              </div>
            </div>

            <div className="col-span-2 xl:col-span-3">
              <form className={`${contactSubSection} ${email} h-full`}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div
                    className="inputContainer"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <input
                      className="input"
                      type="text"
                      ref={userName}
                      required
                    />
                    <label className="inputLabel">NAME</label>
                  </div>
                  <div
                    className="inputContainer"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <input
                      className="input"
                      type="text"
                      ref={userEmail}
                      required
                    />
                    <label className="inputLabel">EMAIL</label>
                  </div>
                </div>

                <div className="inputContainer mb-8" data-aos="fade-up">
                  <input
                    className="input"
                    type="text"
                    ref={userSubject}
                    required
                  />
                  <label className="inputLabel">SUBJECT</label>
                </div>

                <div
                  className="inputContainer mb-8"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <textarea
                    className="textarea"
                    rows={5}
                    ref={userBody}
                    required
                  />
                  <label className="inputLabel">BODY</label>
                </div>

                <button
                  className="button"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  onClick={(e) => handleSubmit(e)}
                >
                  SEND
                </button>

                <h1 className={`${contactSectionTitle}`}>EMAIL</h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
