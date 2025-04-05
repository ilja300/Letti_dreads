import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

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
        <div className={styles.more}>
          <Link to={"/shop"}>More </Link>
        </div>
      </div>
    </div>
  );
}
