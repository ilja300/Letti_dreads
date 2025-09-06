import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { SetItem } from "../../componets";
import { addListener } from "@reduxjs/toolkit";

export function Home() {
  const imgs = ["/img_slider1.png", "/img_slider2.png"];
  const [imgSrc, setImgSrc] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgSrc((prev) => (prev + 1) % imgs.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home}>
      <div
        className={styles.slider}
        style={{ backgroundImage: `url(${imgs[imgSrc]})` }}
      >
        <h2>SETS IN STOCK</h2>

        <div className={styles.more}>
          <Link to={"/shop"}>More </Link>
        </div>
      </div>
      <div className={styles.popularSets}>
        <h3>POPULAR SETS</h3>
        <div className={styles.setsList}>
          <SetItem
            img={"/dreads_card/prototyp1.jpg"}
            name={"öalksdfjaölskdfjaösldkf"}
            price={"from 300€"}
          />
          <SetItem
            img={"/dreads_card/prototyp1.jpg"}
            name={"öalksdfjaölskdfjaösldkf"}
            price={"from 300€"}
          />
          <SetItem
            img={"/dreads_card/prototyp1.jpg"}
            name={"öalksdfjaölskdfjaösldkf"}
            price={"from 300€"}
          />
          <SetItem
            img={"/dreads_card/prototyp1.jpg"}
            name={"öalksdfjaölskdfjaöslasdfasdfasdfasdfdkf"}
            price={"from 300€"}
          />
          <SetItem
            img={"/dreads_card/prototyp1.jpg"}
            name={"öalksdasdfasdfasdfasdfasdffjaölskdfjaösldkf"}
            price={"from 300€"}
          />
        </div>
      </div>
    </div>
  );
}
