/* eslint-disable prettier/prettier */
import "./SideNavigation.css";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";

export default function SideNavigation() {
  return (
    <div>
      <ul id="sideNavigation">
        <li key="instagram">
          <a target="_blank" rel="noreferrer" href="https://instagram.com">
            <img src={Instagram} alt="Instagram Logo."></img>
          </a>
        </li>
        <li key="facebook">
          <a target="_blank" rel="noreferrer" href="http://www.facebook.com/pages/Twilight-Drive-In/121390834582198">
            <img src={Facebook} alt="Facebook Logo." />
          </a>
        </li>
      </ul>
    </div>
  );
}
