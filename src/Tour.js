function Tour({ id, image, info, price, name }) {
  return (
    <article>
      <img src={image} alt={name}></img>
      <footer>
        <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <p>{info}</p>
        <button>not interested</button>
      </footer>
    </article>
  );
}

export default Tour;
