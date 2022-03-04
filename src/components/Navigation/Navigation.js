import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import cart from "../../images/cart.svg";

export default function Navigation() {
  return (
    <div className="navigationContainer">
      <ul id="navigation">
        <li key="hero">
          <HashLink smooth to="#home">
            Home
          </HashLink>
        </li>
        <li key="tickets">
          <HashLink smooth to="#buyTickets">
            Tickets
          </HashLink>
        </li>
        <li key="faqs">
          <HashLink smooth to="#">
            FAQS
          </HashLink>
        </li>
        <li key="directions">
          <HashLink smooth to="#">
            Directions
          </HashLink>
        </li>
        <li key="cart">
          <HashLink smooth to="#">
            <img id="cart" src={cart} alt="Purple shopping cart."></img>
          </HashLink>
        </li>
      </ul>
    </div>
  );
}
