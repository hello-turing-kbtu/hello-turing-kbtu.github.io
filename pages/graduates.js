import styles from "../styles/Graduates.module.css";
import Image from "next/image";
import { gradList } from "./gradList";

export default function Graduates() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <p className={styles.title}>Graduates_2019</p>
        <div className={styles.graduates}>
          {gradList.map((el) => (
            <div className={styles.card}>
              <Image src={el.imagePath} width={277} height={339}></Image>
              <p className={styles.cardTitle}>{el.name}</p>
              <p className={styles.cardDescription}>{el.now}</p>
            </div>
          ))}
        </div>
        <hr className={styles.new} />
        <div className={styles.callToAction}>
          <p className={styles.callToActionTitle}>
            Hello, Turing! Where full-heart mentorship happens
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAK72aTAqXNq5PHiHo1rteIeL3fg8MG1VNkf0jFNqPpSNg2A/viewform"
          >
            <button className={styles.actionButton}>BECOME A JEDY!</button>
          </a>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerButtons}>
            {/* <button className={styles.footerButton}>О сообществе</button>
            <button className={styles.footerButton}>Программа</button> */}
          </div>
          <Image
            className={styles.logo}
            src={"/turingLogo.png"}
            width={85}
            height={85}
          ></Image>
        </div>
      </div>
    </div>
  );
}
