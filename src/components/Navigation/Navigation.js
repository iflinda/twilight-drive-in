import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import logo from "../../images/logo.svg";
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
        <li key="buyTickets">
          <HashLink smooth to="#buyTickets">
            Tickets
          </HashLink>
        </li>
        <li key="logo">
          <HashLink smooth to="#home">
            <img id="logo" src={logo} alt="Twilight Drive-in Logo"></img>
          </HashLink>
        </li>
        <li key="faqs">
          <HashLink smooth to="#home">
            FAQ
          </HashLink>
        </li>
        <li key="cart">
          <HashLink smooth to="#home">
            <img id="cart" src={cart} alt="Purple shopping cart."></img>
          </HashLink>
        </li>
      </ul>
    </div>
  );
}
