import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/assets/featured.3.png",
    "/assets/featured.2.png",
    "/assets/featured.1.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
    console.log(index);
  };
  return (
    <div className={styles.Container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/assets/arrowl.png" alt="left" layout="fill" />
      </div>
      <div
        className={styles.wrapper}
        // style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((item, i) => (
          <div className={styles.imageContainer} key={i}>
            <Image src={item} alt="banner" layout="fill" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/assets/arrowr.png" alt="right" layout="fill" />
      </div>
    </div>
  );
};
export default Featured;
