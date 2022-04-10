import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/assets/bg.png"
          // objectFit="contain"
          objectFit="initial"
          layout="fill"
          alt="footer-bg"
          style={styles.image}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            COME AND GRAB, WELL BAKED SLICE OF PIZZAAA!!!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR CAFE</h1>
          <p className={styles.text}>
            12-12, Station Road #405,
            <br />
            Hyderabad
            <br /> 9849583959
          </p>
          <p className={styles.text}>
            12-12, Station Road #405,
            <br />
            Hyderabad
            <br /> 9849583959
          </p>
          <p className={styles.text}>
            12-12, Station Road #405,
            <br />
            Hyderabad
            <br /> 9849583959
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:30
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 - 6:00
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
