/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./BuyTicketsCard.css";

export default function BuyTicketsCard(props) {
  console.log(props);
  return (
    <div>
      {props.moviesData.map((data) => (
        <article className="movieArticle" key={data.imdbID}>
          <div className="movieLeftSideFlex">
            <h2>{data.Title}</h2>
            <img src={data.Poster} alt={data.Title + "Official Poster"} />
          </div>
          <div className="movieRightSideFlex">
            <ul className="tags">
              <li>{data.Year}</li>
              <li>{data.Runtime}</li>
              <li>{data.Genre}</li>
            </ul>
            <p>{data.Plot}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
