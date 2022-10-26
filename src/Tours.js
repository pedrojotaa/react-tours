import Tour from "./Tour";
import styles from './Tours.module.css'

function Tours({ tours }) {
  return (
    <section>
      <div className={styles.tours_container}>
        <h2 className={styles.tours_title}>our tours</h2>
        <div>_____</div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
