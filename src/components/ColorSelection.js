import react, { useState } from "react";
import "./ColorSelection.css";

const ColorSelection = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.color);
  const selectionHandler = (e) => {
    const { name, value } = e.target;
    setSelectedColor(value); // you just need to raise this color up to the next state
    props.onChangeColor(props.id, value);
  };
  return (
    <div>
      <div className="note__color-selection">
        <input
          type="radio"
          name={"note-color-" + props.id}
          value="leaf-color"
          onChange={selectionHandler}
          checked={selectedColor === "leaf-color"}
          key={1}
        />
        <input
          type="radio"
          name={"note-color-" + props.id}
          value="banana-color"
          onChange={selectionHandler}
          checked={selectedColor === "banana-color"}
          key={2}
        />
        <input
          type="radio"
          name={"note-color-" + props.id}
          value="sky-color"
          onChange={selectionHandler}
          checked={selectedColor === "sky-color"}
          key={3}
        />
      </div>
    </div>
  );
};

export default ColorSelection;
