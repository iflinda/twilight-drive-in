import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/SideNavigation/SideNavigation";
import BuyTickets from "./components/BuyTickets/BuyTickets";
import "./global.css";

export default function App() {
  return (
    <div>
      <nav className="container">
        <Navigation />
      </nav>
      <header>
        <Hero />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <BuyTickets />
      </main>
    </div>
  );
}
