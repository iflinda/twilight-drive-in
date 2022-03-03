import HeroText from "./HeroText";
import "./Hero.css";
import HeroVideoBackground from "./HeroVideoBackground";
import PurchaseButton from "../UI/PurchaseButton";

export default function Hero() {
  return (
    <div>
      <HeroVideoBackground />
      <HeroText />
      <div id="heroInformationContainer">
        <h1>Metro Vancouver`s only drive-in theatre.</h1>
        <PurchaseButton title="Browse Tickets" />
      </div>
    </div>
  );
}
