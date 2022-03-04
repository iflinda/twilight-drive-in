import HeroText from "./HeroText";
import "./Hero.css";
import HeroVideoBackground from "./HeroVideoBackground";

export default function Hero() {
  return (
    <div id="home">
      <HeroVideoBackground />
      <HeroText />
      <div id="heroInformationContainer">
        <h1>Metro Vancouver`s only drive-in theatre.</h1>
      </div>
    </div>
  );
}
