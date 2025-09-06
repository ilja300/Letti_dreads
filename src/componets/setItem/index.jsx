import React from "react";
import styles from "./SetItem.module.scss";

export function SetItem({ img, name, price }) {
  return (
    <div className={styles.setItem}>
      <img src={img} alt="img_dreads" />
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
}
