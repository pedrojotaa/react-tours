import Tour from "./Tour";
import styles from './Tours.module.css'

function Tours({ tours }) {
  return (
    <section>
      <div>
        <h2 className={styles.title}>our tours</h2>
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
