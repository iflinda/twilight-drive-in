import Hero from "./components/Hero/Hero";
import SideNavigation from "./components/SideNavigation/SideNavigation";

function App() {
  return (
    <div>
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
