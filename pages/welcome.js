import styles from "../styles/Welcome.module.css";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.buttonsBlock}>
          {/* <button className={styles.headerButton}>О сообществе</button>
          <button className={styles.headerButton}>Программа</button> */}
        </div>
        <div className={styles.logoBlock}>
          <Image
            src="/kbtuLogo.svg"
            alt="Vercel Logo"
            width={140}
            height={51}
          />
          <Image
            src="/turingLogoWhite.png"
            alt="Vercel Logo"
            width={86}
            height={85}
          />
        </div>
      </header>
      <div className={styles.callToActionContainer}>
        <p className={styles.title}>Full-heart mentorship that works</p>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Hello, Turing! — это менторская программа от старшекурсников для
            младшекурсников
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAK72aTAqXNq5PHiHo1rteIeL3fg8MG1VNkf0jFNqPpSNg2A/viewform"
          >
            <button className={styles.actionButton}>ДАВАЙ С НАМИ!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
