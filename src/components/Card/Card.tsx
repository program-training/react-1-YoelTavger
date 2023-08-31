import Title from "./Title";
import Image from "./Image";
import Text from "./Text";
import "./Card.css";
import { useState } from "react";

export default function Card() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = (event: any) => {
    setBackgroundColor(event.target.value);
  };

  const cardStyles = {
    backgroundColor: backgroundColor,
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: '220px',
  };

  return (
    <div style={cardStyles}>
      <Title />
      <Image />
      <Text />
      <select value={backgroundColor} onChange={handleColorChange}>
        <option value="white">white</option>
        <option value="lightblue">lightblue</option>
        <option value="lightgreen">light green</option>
        <option value="lightpink">light pink</option>
        <option value="#fbbf77">light orange</option>
      </select>
    </div>
  );
}
