/* eslint-disable react/prop-types */
import "./PurchaseButton.css";

export default function PurchaseButton(props) {
  return (
    <a className="buttonStyle" href="#browseTickets">
      {props.title}
    </a>
  );
}
