import React, { useState } from "react";
import posed from "react-pose";


const MirroredFour = posed.div({
  unhovered: { transform: "rotateY(0deg)" },
  hovered: {
    transform: "rotateY(180deg)",
    transition: {
      type: "tween",
      duration: 2000
    }
  }
});

export const Example = () => {
  const [hovering, setHovering] = useState(false);

  console.log("hovering", hovering);
  return (
    <div className="box2"

      onMouseEnter={() => {
        setHovering(true);
        console.log('mouseenter')
      }}
      onMouseLeave={() => {
        setHovering(false);
        console.log('mouseleave')
      }}
    >
 
        <MirroredFour className="box" pose={hovering ? "hovered" : "unhovered"}>4</MirroredFour>
  
    </div>
  );
};