import styles from "./footer.module.scss";

const { footerSection, versionText } = styles;

export default function Footer() {
  return (
    <section className={`${footerSection} section mt-48`}>
      <div className="container mx-auto py-12 px-8">
        <div
          className="inline-block mr-1"
          data-aos="fade-in"
          data-aos-offset="-150"
          data-aos-duration="1500"
        >
          <p>DESIGNED & CODED BY </p>
        </div>

        <div className="inline-block" data-aos="fade-in" data-aos-offset="-150">
          <p className="font-bold text-xl">BENJAMIN SAOBUPPHA</p>
        </div>

        <p
          className={`${versionText} descriptionText mt-2`}
          data-aos="fade-in"
          data-aos-offset="-200"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          v4.0.0
        </p>
      </div>
    </section>
  );
}
