import react from "react";
import "./NoteTextInput.css";

const NoteTextInput = () => {
  return (
    <form>
      <div className="note__test-div">
        <textarea className="note__text-area">{text}</textarea>
      </div>
    </form>
  );
};

export default NoteTextInput;
