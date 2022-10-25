import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <section>
      <div>
        <h2>our tours</h2>
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
