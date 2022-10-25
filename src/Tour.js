import styles from "./Tour.module.css";

function Tour({ id, image, info, price, name }) {
  return (
    <article className={styles.tour_container}>
      <img src={image} alt={name}></img>
      <footer>
        <div className={styles.tour_info}>
          <h4>{name}</h4>
          <h4 className={styles.tour_price}>R$ {price}</h4>
        </div>
        <p>{info}</p>
        <button>not interested</button>
      </footer>
    </article>
  );
}

export default Tour;
