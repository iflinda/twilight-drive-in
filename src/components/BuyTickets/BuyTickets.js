/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import BuyTicketsCard from "./BuyTicketsCard";
import "./BuyTickets.css";

export default function BuyTickets() {
  const apiKey = process.env.REACT_APP_IMBD_API_KEY;
  const ids = [{ id: "tt1877830" }, { id: "tt10838180" }];

  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState("");
  const allMovies = [];

  async function handleFetchRequest(id) {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    const result = await response.json();
    allMovies.push(result);
  }

 function fetchMovies() {
    ids.map((data) => {
      let id = data.id;
      handleFetchRequest(id);
      setIsLoaded(true);
      setMovies(allMovies);
    });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  if (isLoaded) {
    return <div><BuyTicketsCard movies={movies} /></div>;
  } else {
    return <div>Bye</div>;
  }
}
