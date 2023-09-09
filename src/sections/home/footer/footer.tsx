import styles from "./footer.module.scss";

const { footerSection, versionText } = styles;

export default function Footer() {
  return (
    <section className={`${footerSection} section mt-48`}>
      <div className="container mx-auto py-12">
        <div className="inline">
          <p>
            DESIGNED & CODED BY{" "}
            <span className="font-bold text-xl">BENJAMIN SAOBUPPHA</span>
          </p>
        </div>

        <p className={`${versionText} descriptionText mt-2`}>v4.0.0</p>
      </div>
    </section>
  );
}
