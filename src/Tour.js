import styles from "./Tour.module.css";

import { useState } from "react";

function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className={styles.tour_container}>
      <img src={image} alt={name}></img>
      <footer>
        <div className={styles.tour_info}>
          <h4>{name}</h4>
          <h4 className={styles.tour_price}>R$ {price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
        <button onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
}

export default Tour;
