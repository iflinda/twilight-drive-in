/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import BuyButtonArea from "./BuyButtonArea";
import "./BuyTicketsCard.css";

export default function BuyTicketsCard(props) {
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
              <li key={data.imdbID + data.Year}>{data.Year}</li>
              <li key={data.imdbID + data.Runtime}>{data.Runtime}</li>
              {data.Genre.split(",").map((genre) => (
                <li key={data.imdbID + genre}>{genre}</li>
              ))}
            </ul>
            <p className="moviePlotText">{data.Plot}</p>
            <BuyButtonArea />
          </div>
        </article>
      ))}
    </div>
  );
}
