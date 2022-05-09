import react from "react";
import spinner from "../assets/spinner.gif";

export default function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200px", display: "block", margin: "auto" }}
    />
  );
}
