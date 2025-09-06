import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Shop.module.scss";
import { useEffect } from "react";
import { fetchSets } from "../../redux/slices/setSlice";
import { SetItem } from "../../componets";
import ContentLoader from "react-content-loader";

export function Shop() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { sets } = useSelector((state) => state.sets);
  useEffect(() => {
    dispatch(fetchSets());
  }, [dispatch]);
  const taitel = {
    dreads: "Dreads",
  };

  return (
    <div className={styles.shop}>
      <h1>{taitel[id]}</h1>
      <div className={styles.shopList}>
        {sets.length
          ? sets.map((set, index) => (
              <SetItem
                className={styles.shopItem}
                name={set.name}
                img={set.img}
                price={set.price}
                key={index}
              />
            ))
          : new Array(10).fill(0).map((_, index) => (
              <ContentLoader
                speed={0.5}
                width={250}
                height={410}
                viewBox="0 0 250 410"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                key={index}
              >
                <rect x="0" y="0" rx="0" ry="0" width="250" height="410" />
              </ContentLoader>
            ))}
      </div>
    </div>
  );
}
