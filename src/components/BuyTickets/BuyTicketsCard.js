/* eslint-disable react/prop-types */
export default function BuyTicketsCard(props) {
  console.log(props);
  return (
    <div>
      {props.movies.map((data) => (
        <article className="BuyTicketContainer" key={data.imbdId}>
          <div>
            <h2>{data.Title}</h2>
            <img src={data.Poster} alt={data.Title + "Poster"}></img>
          </div>
          <div>
            <p>{data.Genre}</p>
          </div>
          <div>
            <p>{data.Plot}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
