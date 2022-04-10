import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/assets/pizza1.png" alt="pizza" width="500" height="500" />
      <h1 className={styles.title}>Chimken</h1>
      <span className={styles.price}>300/-</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};
export default PizzaCard;
