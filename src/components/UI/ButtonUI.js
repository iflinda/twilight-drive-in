/* eslint-disable react/prop-types */
import "./ButtonUI.css";

export default function ButtonUI(props) {
  return (
    <a className="buttonStyle" href="#browseTickets">
      {props.title}
    </a>
  );
}
