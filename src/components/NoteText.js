import react from "react";
import "./NoteText.css";

const NoteEntry = (props) => {
  const text = props.textEntry;
  return (
    <div>
      <div className="note__body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NoteEntry;
