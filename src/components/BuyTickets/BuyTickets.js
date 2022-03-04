/* eslint-disable no-undef */
import axios from "axios";
import { useEffect, useState } from "react";
import BuyTicketsCard from "./BuyTicketsCard";

export default function BuyTickets() {
  const apiKey = process.env.REACT_APP_IMBD_API_KEY;
  const ids = [{ id: "tt1877830" }, { id: "tt10838180" }, { id: "tt10872600" }, { id: "tt1464335" }];
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    let allMovies = [];
    for (let i = 0; i < ids.length; i++) {
      let id = ids[i].id;
      let response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
      let data = response.data;
      allMovies.push(data);
    }
    setMovies(allMovies);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div id="buyTickets">
      <BuyTicketsCard moviesData={movies} />
    </div>
  );
}
