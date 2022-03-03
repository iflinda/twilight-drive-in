import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import "./global.css";

function App() {
  return (
    <div>
      <nav className="container">
        <Navigation />
      </nav>
      <header>
        <Hero />
      </header>
      <aside>
        <SideNavigation />
      </aside>
    </div>
  );
}

export default App;
