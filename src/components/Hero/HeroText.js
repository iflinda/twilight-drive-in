/* eslint-disable prettier/prettier */
import './HeroText.css';

export default function HeroText() {
  return (
    <div>
      <svg id="heroText" height="100vh" width="100%">
        <title>Twilight Drive-In Text</title>
        <desc>
          The Twilight Drive-In text is a mask over a video of a beautiful ocean during twilight.
        </desc>
        <defs>
          <mask id="mask" x="0" y="0" height="100%" width="100%">
            <rect  x="0" y="0" height="100%" width="100%" />
            <text x="50%" y="50%" fill="red" textAnchor="middle">
              Twilight
            </text>
            <text id="lowerHeroText" x="50%" y="50%" fill="red" textAnchor="middle">
              Drive—In
            </text>
          </mask>
        </defs>
        <rect  x="0" y="0" height="100%" width="100%" />
      </svg>
    </div>
  );
}
