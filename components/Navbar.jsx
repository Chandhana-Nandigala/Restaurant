import Image from "next/image";
import styles from "../styles/Navabar.module.css";

const items = [
  "Home",
  "Products",
  "Menu",
  "Events",
  "Blog",
  "Contact",
  "Chinku's \nPizza World",
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image src={"/assets/telephone.png"} width={"30px"} height={"30px"} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+91 999-999-9999</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <>
              {index === 6 ? (
                <li className={styles.logoTxt}>{item}</li>
              ) : (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/assets/cart.png" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
