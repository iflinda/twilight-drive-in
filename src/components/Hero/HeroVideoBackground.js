import "./HeroVideoBackground.css";
import ocean from "../../videos/ocean.mp4";

export default function HeroVideoBackground() {
  return (
    <video autoPlay playsInline muted loop>
      <source src={ocean} />
    </video>
  );
}
