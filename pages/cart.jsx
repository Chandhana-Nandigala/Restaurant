import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Cart.module.css";
const Cart = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chinku's Pizza World</title>
        <meta name="description" content="Dine into Chinku" />
        <link rel="icon" href="pizza.ico" />
      </Head>
      {/* actual design */}
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td className={styles.tdImg}>
              <div className={styles.imgContainer}>
                <Image
                  src="/assets/pizza.png"
                  alt="Pizza"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>Chimken</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>Extra Spice</span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>300 /-</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>2</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>450 /-</span>
            </td>
          </tr>
          <tr>
            <td className={styles.tdImg}>
              <div className={styles.imgContainer}>
                <Image
                  src="/assets/pizza.png"
                  alt="Pizza"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>Chimken</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>Extra Spice</span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>300 /-</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>2</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>450 /-</span>
            </td>
          </tr>
          <tr>
            <td className={styles.tdImg}>
              <div className={styles.imgContainer}>
                <Image
                  src="/assets/pizza.png"
                  alt="Pizza"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td className={styles.td}>
              <span className={styles.name}>Chimken</span>
            </td>
            <td className={styles.td}>
              <span className={styles.extras}>Extra Spice</span>
            </td>
            <td className={styles.td}>
              <span className={styles.price}>300 /-</span>
            </td>
            <td className={styles.td}>
              <span className={styles.quantity}>2</span>
            </td>
            <td className={styles.td}>
              <span className={styles.total}>450 /-</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2>CART TOTAL</h2>
          <b className={styles.totalTextTitle}>Total: 450 /-</b>
          <b className={styles.totalTextTitle}>Discount: 0.00</b>
          <b className={styles.totalTextTitle}>Grand Total: 450 /-</b>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
