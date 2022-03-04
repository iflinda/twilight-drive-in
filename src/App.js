import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import BuyTickets from "./components/BuyTickets/BuyTickets";
import "./global.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <Navigation />
        </nav>
        <header>
          <Hero />
        </header>
        <main>
          <BuyTickets />
        </main>
      </div>
    </BrowserRouter>
  );
}
