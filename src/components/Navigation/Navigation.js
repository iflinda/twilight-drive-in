import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";

export default function Navigation() {
  return (
    <div className="navigationContainer">
      <ul id="navigation">
        <li key="hero">
          <HashLink to="#home">Home</HashLink>
        </li>
        <li key="buyTickets">
          <HashLink to="#home">Buy Tickets</HashLink>
        </li>
        <li key="logo">
          <HashLink to="#home">
            <img id="logo" src={logo} alt="Twilight Drive-in Logo"></img>
          </HashLink>
        </li>
        <li key="faqs">
          <HashLink to="#home">FAQ</HashLink>
        </li>
        <li key="cart">
          <HashLink to="#home">
            <img id="cart" src={cart} alt="Purple shopping cart."></img>
          </HashLink>
        </li>
      </ul>
    </div>
  );
}
